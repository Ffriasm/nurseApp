import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Switch, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

export default function CreateServiceRequestScreen() {
  const [serviceType, setServiceType] = useState("inyección");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [isDirect, setIsDirect] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleSubmit = () => {
    const request = {
      title: `Solicitud de ${serviceType}`,
      description,
      serviceType,
      priority: isUrgent ? "urgent" : "planned",
      type: isDirect ? "direct" : "open",
      scheduledAt: isUrgent ? new Date() : date,
      price: isUrgent ? 20000 : 15000, // ejemplo de lógica de precio
    };

    console.log("Enviando solicitud:", request);
    // Aquí llamas a tu repositorio para subirlo a Firebase
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tipo de servicio</Text>
      <Picker selectedValue={serviceType} onValueChange={setServiceType}>
        <Picker.Item label="Inyección" value="inyección" />
        <Picker.Item label="Curación" value="curaciones" />
        <Picker.Item label="Control de signos" value="control signos" />
        <Picker.Item label="Otros" value="otros" />
      </Picker>

      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Aplicación de antibiótico IM"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <View style={styles.switchRow}>
        <Text>¿Es una urgencia?</Text>
        <Switch value={isUrgent} onValueChange={setIsUrgent} />
      </View>

      <View style={styles.switchRow}>
        <Text>¿Enviar a enfermera específica?</Text>
        <Switch value={isDirect} onValueChange={setIsDirect} />
      </View>

      {!isUrgent && (
        <>
          <Text style={styles.label}>Fecha y hora programada</Text>
          <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
            <Text>{date.toLocaleString()}</Text>
          </TouchableOpacity>
          {showPicker && (
            <DateTimePicker
              value={date}
              mode="datetime"
              display="default"
              onChange={(event, selectedDate) => {
                setShowPicker(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}
        </>
      )}

      <Button title="Enviar solicitud" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flex: 1 },
  label: { fontWeight: "bold", marginTop: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, borderRadius: 8, marginTop: 8 },
  switchRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 16 },
  dateButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    alignItems: "center",
  },
});