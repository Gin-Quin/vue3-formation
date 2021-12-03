import { ref } from "@vue/reactivity";
import { User } from "../types/User";

export const user = ref<User | null>(null);
