import React from "react";
import "../../styles/Home/Team.css"
import bottel from "../../images/bottel.jpg"
import team from "../../images/team.jpg"
import { NavLink } from "react-router-dom";
import tattoo from "../../images/tattoo.gif"

function Team() {
    return (
        <div className="gif" style={{ backgroundImage:`url(${tattoo})` }}>
        <div className="containerTeam">
            {/*Intro Text*/}
            <div className="containerIntro">
                <p>Herzlich Willkommen bei Bottel & Team !</p>
                <p>Hier erfährst du alles über uns und unsere Philosophie.</p>
                <p>Es erwarten dich viele Einblicke in unsere Arbeit, sodasss du dir einen ersten Eindruck verschaffen kannst.</p>
                <p>Reinschauen lohnt sich! Es kommen regelmäßig attraktive Aktionen!</p>
            </div>
            {/*Bottel*/}
            <div className="bottel">
              <img src={bottel} alt="" className="imageBottel"/>
              <div className="textBottel">
                <p>Hi! Ich bin Rene, auch genannt Bottel. Ich bin euer zuständiger Tätowierer.</p>
                <p>Seit über 35 Jahre bin ich im Bereich Tattoo und Piercing tätig. Zudem habe ich Erfahrungen in der Heilpraktik.</p>
                <p>In xy habe ich mein Tattoo & Piercingstudio in Ahaus eröffnet. Seither habe ich mir einen festen Kundenstamm aufgebaut, der gerne stetig erweitert werden darf!</p>
                <p>Ich bin immer bereit mich mit neuen Projekten, ganz nach euren Wünschen, auseinander zu setzen.</p>
                <p>Allerdings bin ich nicht nur in Ahaus vertreten, sondern auch auf <NavLink className="linkBali" to="https://www.holidayinbali.com/">Bali</NavLink>! Falls ihr also Bock auf ein Abenteuer habt dann schaut gerne mal rein!</p>
              </div>
              <p >    </p>
            </div>
            {/*Team*/}
            <div className="team">
                <img src={team} alt="" className="imageTeam"/>
                <div className="textTeam">
                    <p>Hey! Wir sind das Team Bottel! Wir führen die freundliche und kompetente Beratung mit euch vor Ort oder auch am Telefon durch.</p>
                    <p>Nachdem ihr uns euren Tattoo-Wunsch mitgeteilt habt, gestalten wir ganz nach euren Vorstellungen ein individuelles Motiv für euch. Dieses besprechen wir dann gemeinsam, ob Größe, Umsetzung und weitere Details für euch passend sind.</p>
                    <p>Terminvereinbarungen, -absagen oder -verschiebungen regeln wir gerne zusammen mit euch.</p>
                    <p>Außerdem helfen wir euch auch gerne beim Wechsel eures Piercingschmucks oder beim Dehnen, falls euer Piercingloch zugewachsen ist.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Team