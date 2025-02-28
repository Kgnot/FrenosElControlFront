// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;
use std::env;
use std::path::PathBuf;

#[tauri::command]
fn ejecutar_jar() -> Result<String, String> {
    let mut jar_path = env::current_exe().unwrap();
    jar_path.pop();  // deja la carpeta de instalación
    jar_path.push("tu_programa.jar");

    if !jar_path.exists() {
        return Err("No se encontró tu_programa.jar en la carpeta de instalación".to_string());
    }

    let output = Command::new("java")
        .arg("-jar")
        .arg(jar_path.to_str().unwrap())
        .output();

    match output {
        Ok(output) => {
            if output.status.success() {
                Ok(String::from_utf8_lossy(&output.stdout).to_string())
            } else {
                Err(String::from_utf8_lossy(&output.stderr).to_string())
            }
        }
        Err(e) => Err(e.to_string()),
    }
}


fn main() {
  app_lib::run();
  tauri::Builder::default()
          .invoke_handler(tauri::generate_handler![ejecutar_jar])
          .run(tauri::generate_context!())
          .expect("error while running tauri application");

}
