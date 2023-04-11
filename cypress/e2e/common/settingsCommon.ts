import { When } from "@badeball/cypress-cucumber-preprocessor";
import SettingsPageAction from "../../pageObjects/settingsPage/actions";

const settingsPageAction = new SettingsPageAction()

When("[COMMON]: User visit Settings page", ()=>{
    settingsPageAction.visitSettingsPage()
});