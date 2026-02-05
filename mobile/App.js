import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Autonomous Agentic AI Med Agent</Text>
        <Text style={styles.paragraph}>
          Welcome to the AI Med Agent mobile app. This app will support doctors and patients with:
        </Text>
        <Text style={styles.listItem}>• Symptom assessment</Text>
        <Text style={styles.listItem}>• Patient monitoring</Text>
        <Text style={styles.listItem}>• Care coordination</Text>
        <Text style={styles.listItem}>• Secure messaging</Text>
        <Text style={styles.listItem}>• Workflow automation</Text>
        <Text style={styles.status}><Text style={{fontWeight:'bold'}}>Status:</Text> Platform is initializing. Please check back soon for live features.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", margin: 24 },
  paragraph: { fontSize: 16, marginHorizontal: 24, marginBottom: 12 },
  listItem: { fontSize: 16, marginHorizontal: 36, marginBottom: 4 },
  status: { fontSize: 16, margin: 24, color: "#555" },
});
