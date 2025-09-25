class Notification {
  constructor(service) {
    // Aquí Notification no depende de un proveedor concreto.
    // Es como un restaurante que dice:
    // "Yo solo necesito tomates, no importa de dónde vengan".
    this.service = service; 
  }

  notify(message) {
    this.service.send(message);
    console.log("Notificación enviada");
  }
}

// Distintos "proveedores de mensajes"
class EmailService {
  send(message) {
    console.log("Email:", message);
  }
}

class SMSService {
  send(message) {
    console.log("SMS:", message);
  }
}

// Uso
const emailNoti = new Notification(new EmailService());
//  Como un restaurante que compra tomates al Proveedor A
emailNoti.notify("Pedido confirmado por Email");

const smsNoti = new Notification(new SMSService());
//  Como un restaurante que cambia a Proveedor B sin tocar su cocina
smsNoti.notify("Pedido confirmado por SMS");

// Ventaja:
// - Notification solo pide "un servicio que pueda enviar mensajes",
//   igual que un chef solo pide "tomates de calidad".
// - Cambiar el proveedor (Email → SMS) no obliga a tocar Notification,
//   igual que cambiar de proveedor no obliga a reescribir las recetas.
