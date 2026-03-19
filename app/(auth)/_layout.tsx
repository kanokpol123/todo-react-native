import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ 
      headerTransparent: true, 
      headerStyle: { backgroundColor: "transparent" },
      title: "",
    }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }}/>
    </Stack>
  );
}
