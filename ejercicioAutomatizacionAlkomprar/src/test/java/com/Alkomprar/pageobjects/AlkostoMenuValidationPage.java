package com.Alkomprar.steps;


import org.apache.tools.ant.filters.TokenFilter.ContainsString;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.DefaultUrl;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.*;


@DefaultUrl("https://www.alkosto.com/")
public class AlkostoMenuValidationPage extends PageObject {

    //menu hogar
    @FindBy(xpath="/html/body/div[1]/div/div[1]/div/a[11]")
    public WebElementFacade menuHogar;

    //menu silla
    @FindBy(xpath="/html/body/div[1]/div/div[9]/div/div/div[2]/ul/li[3]/a/img")
    public WebElementFacade menuSilla;

    //label silla
    @FindBy(xpath="/html/body/div[1]/div/div[8]/h1")
    public WebElementFacade lblSillaValidation;


    public void labelSillaValidation() {

        menuHogar.click();
        menuSilla.click();
        String strMensaje=lblSillaValidation.getText();
        assertThat(strMensaje, containsString("Sillas de Oficina"));

    }

}
