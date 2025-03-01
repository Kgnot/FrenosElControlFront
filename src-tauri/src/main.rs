#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;
use std::env;

#[tauri::command]
fn ejecutar_jar() -> Result<String, String> {
    ejecutar_jar_interno()
}

fn ejecutar_jar_automatic() {
    let _ = ejecutar_jar_interno();
}

fn ejecutar_jar_interno() -> Result<String, String> {
    let mut jar_path = env::current_exe().unwrap();
    jar_path.pop();
    jar_path.push("resources");
    jar_path.push("backend");
    jar_path.push("App.jar");

    if !jar_path.exists() {
        return Err(format!("No se encontró el archivo: {:?}", jar_path));
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
    ejecutar_jar_automatic();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![ejecutar_jar])
        .run(tauri::generate_context!())
        .expect("error al correr la aplicación Tauri");
}
