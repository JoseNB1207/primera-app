class EmailService {
  send(message) {
    console.log("Enviando email:", message);
  }
}

class Notification {
  constructor() {
    // Aquí pasa lo mismo que si un restaurante
    // se casara con UN solo proveedor de tomates.
    // Si ese proveedor falla, el chef no puede cocinar.
    this.service = new EmailService();
  }

  notify(message) {
    this.service.send(message);
    console.log("Notificación enviada");
  }
}

// Uso
const noti = new Notification();
noti.notify("Tu pedido fue confirmado");

// Problema:
// - Notification depende directamente de EmailService.
// - Igual que un restaurante que depende solo de un proveedor de tomates.
// - Si cambia el detalle (quiero SMS en vez de email),
//   tengo que modificar la clase Notification.
