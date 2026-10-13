# 🏋️‍♂️ Proyecto AGROFIT - Vistas y Maquetación Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)

Plataforma frontend de **AGROFIT** para la gestión de rutinas, control físico y autenticación de usuarios.

---

## 📁 Estructura del Proyecto

```text
📁 progreso_usuario.html                       → Dashboard de progreso físico
📁 registrar_progreso.html                     → Formulario para registrar nuevas métricas
📁 registro.html                               → Registro dinámico multirrol
📁 rutina_asignada-info.html                   → Vista detallada de rutina y ejercicios
📁 rutina_asignada-semana_de_adaptacion.html   → Control de semana de adaptación
📁 rutina_completada.html                      → Confirmación de día finalizado
📁 recuperar_contraseña-1.html                → Solicitud de correo institucional[cite: 10]
📁 recuperar_contraseña-2.html                → Verificación de código OTP (6 dígitos)[cite: 11]
📁 recuperar_contraseña-3.html                → Creación de nueva contraseña[cite: 12]
📁 recuperar_contraseña-4.html                → Confirmación de contraseña actualizada[cite: 13]
```

| Vista | Qué hace |
| :------------------------------ | :--------------------------------------------------------------------------------------------------- |
| `registro.html`                 | Permite el registro de nuevos usuarios seleccionando rol, tipo de documento y datos de contrato o ficha. |
| `recuperar_contraseña-1.html`    | Solicita el correo institucional para iniciar el proceso de recuperación de cuenta. |
| `recuperar_contraseña-2.html`    | Valida el código de verificación de 6 dígitos enviado al correo del usuario. |
| `recuperar_contraseña-3.html`    | Permite ingresar y confirmar la nueva contraseña cumpliendo requisitos de seguridad. |
| `recuperar_contraseña-4.html`    | Muestra el mensaje de éxito tras actualizar la contraseña y redirige al login. |
| `progreso_usuario.html`         | Visualiza el peso corporal, el porcentaje de grasa y las notas de desempeño del aprendiz. |
| `registrar_progreso.html`       | Formulario para actualizar el peso, la grasa corporal y registrar notas de rendimiento. |
| `rutina_asignada-info.html`     | Muestra la rutina asignada, los días completados y el listado detallado de ejercicios. |
| `rutina_asignada-semana_de_adaptacion.html` | Gestiona el control de entrenamientos durante la semana de adaptación del aprendiz. |
| `rutina_completada.html`        | Pantalla de felicitación y confirmación al completar un día de entrenamiento. |

