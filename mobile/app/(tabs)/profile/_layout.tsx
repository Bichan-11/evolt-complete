import { Stack } from "expo-router";
import SafeArea from "@/components/common/SareArea";

export default function ProfileLayout() {
  return (
    <SafeArea>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="request" />
        <Stack.Screen name="requests" />
        <Stack.Screen name="signin" />
        <Stack.Screen name="signup" />
      </Stack>
    </SafeArea>
  );
}
