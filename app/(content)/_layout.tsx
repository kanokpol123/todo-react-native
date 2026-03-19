// app/complaint/_layout.tsx
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Stack } from "expo-router";

export default function ComplaintLayout() {
  return (
    <ActionSheetProvider>
      <Stack
        screenOptions={{
          headerTransparent: true,
          headerStyle: { backgroundColor: "transparent" },
          title: "",
        }}
      >
        <Stack.Screen name="notification" options={{ headerShown: false }} />
        <Stack.Screen name="profile" options={{ headerShown: false }} />
        <Stack.Screen name="setting" options={{ headerShown: false }} />
      </Stack>
    </ActionSheetProvider>
  );
}
