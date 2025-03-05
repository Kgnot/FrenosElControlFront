#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;
use std::env;

// Apartado para JAVA
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

    // Ejecutar en segundo plano sin esperar.
    let _child = Command::new("java")
        .arg("-jar")
        .arg(jar_path.to_str().unwrap())
        .spawn()
        .map_err(|e| format!("Error al iniciar el backend: {}", e))?;

    Ok("Backend iniciado correctamente".to_string())
}

//  Comando para los fetch:
#[tauri::command]
async fn obtener_clientes() -> Result<String, String> {
    let response = reqwest::get("http://localhost:8080/customer/")
        .await
        .map_err(|e| e.to_string())?;

    let body = response.text().await.map_err(|e| e.to_string())?;
    Ok(body)
}
// Haremos cada uno de los endpoints:

#[tauri::command]
async fn obtener_clientes_por_nombre(nombre: String) -> Result<String, String> {
    let url = format!("http://localhost:8080/customer/{}", nombre);
    let response = reqwest::get(&url)
        .await
        .map_err(|e| e.to_string())?;

    let body = response.text().await.map_err(|e| e.to_string())?;
    Ok(body)
}
#[tauri::command]
async fn obtener_productos() -> Result<String,String> {
    let response = reqwest::get("http://localhost:8080/product/")
        .await
        .map_err(|e| e.to_string())?;

    let body =  response.text().await.map_err(|e| e.to_string())?;
    Ok(body)
}

#[tauri::command]
async fn obtener_productos_por_descripcion(description: String) -> Result<String,String> {
    let url = format!("http://localhost:8080/product/description/{}", description);
        let response = reqwest::get(&url)
            .await
            .map_err(|e| e.to_string())?;

        let body = response.text().await.map_err(|e| e.to_string())?;
        Ok(body)
}

//  Main:
fn main() {
    ejecutar_jar_automatic();

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![ejecutar_jar, obtener_clientes,obtener_productos,obtener_productos_por_descripcion,obtener_clientes_por_nombre])
        .run(tauri::generate_context!())
        .expect("error al correr la aplicación Tauri");
}
