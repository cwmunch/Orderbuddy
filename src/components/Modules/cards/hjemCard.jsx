import React from "react";
import "./cards.scss"
import Button from "../button/button";
import { NavLink } from 'react-router-dom'

export default function HjemCard(props){

    return(
        <section className="card__wrapper" style={{backgroundColor:"#fce4d5"}}>
            <div className="card_home_container">
                <h3 className="card__header" style={{color:"#26045D"}}>Hvem er OrderBuddy?</h3>
                <p className="card__text" style={{color:"#26045D"}}>OrderBuddy tilbyder en webløsning hvor gæsterne kan selv hente menuen og bestille og betale når det passer dem. OrderBuddy fokuserer på at lave bestillingsprocessen hurtig og smertefri uden nogen former for mellemled og oprettelse. Derudover sætter OrderBuddy pris på god kundeoplevelse, miljøet og hygiejne. </p>
                <NavLink to="/omos">
                <Button text="Om os"></Button>
                </NavLink>
            </div>
        </section>
    )
}