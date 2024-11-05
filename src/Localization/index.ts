import { I18n } from "i18n-js";
import { en, vi } from "./languages";

export enum Language {
  "ENGLISH" = "en",
  "VIETNAMESE" = "vi",
}

export const i18n = new I18n({
  [Language.VIETNAMESE]: vi,
  [Language.ENGLISH]: en,
});

export * from "./keys";
