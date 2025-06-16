import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { ServiceRequest } from "../data/interfaces/types";

// Simulamos data de ejemplo
const mockRequests: ServiceRequest[] = [
  {
    id: "1",
    title: "Control postoperatorio",
    description: "Revisión de herida quirúrgica",
    type: "direct",
    priority: "planned",
    serviceType: "curaciones",
    price: 20000,
    createdAt: new Date(),
    scheduledAt: new Date(Date.now() + 3600 * 1000),
    clientId: "abc123",
    targetNurseId: "nurse123",
    location: { lat: -33.4, lng: -70.6 },
  },
  {
    id: "2",
    title: "Inyección urgente",
    description: "Aplicar inyección intramuscular",
    type: "open",
    priority: "urgent",
    serviceType: "inyección",
    price: 15000,
    createdAt: new Date(),
    clientId: "abc999",
    location: { lat: -33.5, lng: -70.7 },
    distanceFromNurse: 8,
  },
];

export default function NurseHomeScreen() {
  const [available, setAvailable] = React.useState(true);

  const renderRequest = ({ item }: { item: ServiceRequest }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text>Tipo: {item.serviceType}</Text>
      <Text>Tipo de solicitud: {item.type === "direct" ? "Directa" : "Abierta"}</Text>
      <Text>Prioridad: {item.priority === "urgent" ? "Urgente 🚨" : "Planificada"}</Text>
      {item.distanceFromNurse && <Text>Distancia: {item.distanceFromNurse} km</Text>}
      <Text style={styles.price}>💰 {item.price.toLocaleString()} CLP</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Aceptar solicitud</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>👩‍⚕️ Bienvenida, Enfermera</Text>
        <View style={styles.switchRow}>
          <Text>Disponible:</Text>
          <Switch value={available} onValueChange={setAvailable} />
        </View>
      </View>

      <Text style={styles.section}>Solicitudes activas:</Text>

      <FlatList
        data={mockRequests}
        keyExtractor={(item) => item.id}
        renderItem={renderRequest}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#F5F5F5" },
  header: { marginBottom: 20 },
  welcome: { fontSize: 22, fontWeight: "600", marginBottom: 10 },
  switchRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  section: { fontSize: 18, fontWeight: "500", marginVertical: 10 },
  list: { paddingBottom: 100 },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  price: { fontWeight: "600", marginTop: 8 },
  button: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "500" },
});