import React, { useState } from "react";
import "../../styles/Q&A/Questions.css"

function Questions() {
    const [show_one, setShow_one] = useState(false)
    const [show_two, setShow_two] = useState(false)
    const [show_three, setShow_three] = useState(false)
    const [show_four, setShow_four] = useState(false)
    const [show_five, setShow_five] = useState(false)
    const [show_six, setShow_six] = useState(false)
    const [show_seven, setShow_seven] = useState(false)
    const [show_eight, setShow_eight] = useState(false)
    const [show_nine, setShow_nine] = useState(false)
    const [show_ten, setShow_ten] = useState(false)
    const [show_eleven, setShow_eleven] = useState(false)
    const [show_twelve, setShow_twelve] = useState(false)
    const [show_thirteen, setShow_thirteen] = useState(false)

    return (
        <div className="q_a">
            <h1 className="heading_QA">Fragen & Antworten</h1>
            <div className="age">
                <h4 onClick={()=>setShow_one(!show_one)} style={{cursor:'pointer'}}>Unter 18 Jahre?</h4>
                {show_one?
                <div>
                <p>Das ist kein Problem! Wir benötigen die Einverständniserklärung der Eltern bzw. eines Erziehungsberechtigten. Unser Formular dazu findest du hier zum ausdrucken.</p>
                <h5>Piercing unter 18</h5>
                <p>Wenn du zwischen 14 und 16 bist und dich piercen lassen möchtest, muss min. ein Erziehungsberechtigter in jedem Fall dabei sein! Vor Ort wird eine Einverständniserklärung von deinen Eltern und von dir ausgefüllt. Zudem wirst du in unserem Studio über das Piercing an sich sowie die Heilung und mögliche Probleme aufgeklärt. Auch da müssen deine Eltern unbedingt anwesend sein.</p>
                <p>Wenn du 16 oder 17 bist und dich piercen lassen möchtest, reicht uns eine ausgefüllte Einverständniserklärung deiner Eltern aus. Die unausgefüllte Version kannst du dir gerne in unserem Studio abholen. Bitte beachte, dass du den Ausweis deiner Mutter oder deines Vaters sowie deinen eigenen mit ins unser Studio bringst. Zudem benötigen wir immer eine Telefonnummer einer deiner Erziehungsberechtigten im Falle von Rückfragen.</p>
                <h5>Tattoo unter 18</h5>
                <p>Wenn du 16 oder 17 Jahre alt bist und dich bei uns tätowieren lassen möchtest, musst du zur Tattooberatung und Terminabsprache auf jeden Fall min. einen Erziehungsberechtigten mitbringen. Auch beim Termin selbst ist es zwingend erforderlich, dass ein Erziehungsberechtigter mit vor Ort ist. Denkt bitte daran, eure Ausweise mitzubringen.</p>
                </div> : null}

            </div>
            <div className="costs_tattoo">
                <h4 onClick={()=>setShow_two(!show_two)} style={{cursor:'pointer'}}>Wie viel kostet ein Tattoo?</h4>
                {show_two? <p>Jedes Tattoo hat seinen ganz individuellen Preis. Dabei kommt es nicht nur darauf an, wie groß dein Wunschmotiv sein soll, sondern auch auf welche Körperstelle es soll, welche Größe du haben möchtest und ob du in Farbe oder doch nur schwarz haben möchtest. Wir bitten daher um Verständnis, dass wir keine Preisauskünfte am Telefon geben können. Komm doch einfach mit deinem Wunschmotiv in unserem Studio vorbei und wir können dir direkt vor Ort einen Preis nennen.</p> : null}
            </div>
            <div className="appointment">
                <h4 onClick={()=>setShow_three(!show_three)} style={{cursor:'pointer'}}>Wie kann ich einen Termin vereinbaren?</h4>
                {show_three? <p>Um einen Termin für dein Tattoo bei uns zu vereinbaren, bitten wir dich, persönlich in unserem Studio vorbeizuschauen. Bevor es zu einer Terminabsprache kommt, möchten wir zuerst dein Wunschmotiv mit dir besprechen und abklären, ob deine Wünsche alle genauso umgesetzt werden können. Nachdem die Details besprochen sind, erhältst du gegen eine Anzahlung einen Termin. Bitte beachte, dass bei Nicht-Einhalten deines Tattootermins deine Anzahlung komplett verfällt. Sagst du deinen Termin spätestens 48 Stunden vorher ab, bleibt deine Anzahlung natürlich bestehen.</p> : null}
            </div>
            <div className="payment">
                <h4 onClick={()=>setShow_four(!show_four)} style={{cursor:'pointer'}}>Wofür dient die Anzahlung?</h4>
                {show_four? <p>Die Anzahlung bei uns hat mehrere Gründe: Einerseits ist diese eine Absicherung für uns, dass du die Sache mit dem Tätowieren wirklich ernst meinst. Andererseits müssen vor deinem Termin einige Vorbereitungen getroffen werden (wie z.B. das Tattoo ins Reine zu zeichnen oder einen Druck vorzubereiten). Da wir dich dafür nicht extra zur Kasse bitten möchten, nutzen wir dafür die Anzahlung. Außerdem reservierst du dir mit deiner Anzahlung auch Bottel und den Tattooraum. Die Anzahalung wird natürlich mit deinem Tattoopreis verrechnet.</p> : null}
            </div>
            <div className="time">
                <h4 onClick={()=>setShow_five(!show_five)} style={{cursor:'pointer'}}>Wie lange sind die Wartezeiten für einen Tattootermin?</h4>
                {show_five? <p>Wie lange du auf dein neues Kunstwerk warten musst, hängt vor allem davon ab, wie du am besten Zeit hast. Abendtermine sind natürlich beliebter als z.B. Termine an einem Montagmorgen. Zudem kriegen wir ein kleines Tattoo noch mal schneller zwischen zwei große Tattootermine geschoben, als ein Motiv, dass 4 Stunden dauert.</p> : null}
            </div>
            <div className="water_sun">
                <h4 onClick={()=>setShow_six(!show_six)} style={{cursor:'pointer'}}>Wie lange darf ich mit meinem frisch gestochenen Tattoo nicht ins Chlorwasser / ins Meer oder in die Sonne?</h4>
                {show_six? <p>Damit dein Tattoo auch in den nächsten Jahren noch frisch aussieht, empfehlen wir dir für min. 10 Tage nach deinem Termin auf Chlor- und Salzwasser zu verzichten. Sonne solltest du ebenfalls für diesen Zeitraum meiden. Übrigens: Dein Tattoo kannst du ab dem Tag nach deinem Termin ganz normal mitduschen oder -waschen.</p> : null}
            </div>
            <div className="before">
                <h4 onClick={()=>setShow_seven(!show_seven)} style={{cursor:'pointer'}}>Was muss ich vorm Tätowieren beachten?</h4>
                {show_seven? <p>Wenn du ein Kaffee- oder Energy Drink Junkie bist, würden wir dich bitten, schon einige Tage vor deinem Termin deinen Konsum (drastisch) zu reduzieren. Gegen eine Tasse Kaffe am Morgen deines Tattootermins sagen wir sicher nichts, aber bei einer Kanne sieht das schon anders aus. Zudem solltest du spätestens am Abend vor deinem Termin keinen Alkohol mehr zu dir nehmen. Am Tag des Termins raten wir dringend davon ab, Schmerzmittel zu dir zu nehmen. Gerade im Sommer solltest du zudem darauf achten, dass du dir nicht kurz vor deinem Termin noch einen Sonnenbrand zuziehst. Falls du regelmäßig ins Solarium gehst, würden wir dich bitten, dies ab ca. einer Woche vor deinem Termin ausfallen zu lassen, um deine Haut nicht unnötig vorzustressen. Alkohol, Kaffee, Schmerzmittel und Drogen haben schlechte Auswirkungen auf dein Tattoo: Nicht nur die Schmerzen sind größer, sondern das Tattoo blutet auch schneller und die Qualität kann erheblich leiden. Daher: Optimale Tattoobedingungen schaffen und auf Kaffee, Alkohol etc. verzichten.</p> : null}
            </div>
            <div className="after">
                <h4 onClick={()=>setShow_eight(!show_eight)} style={{cursor:'pointer'}}>Was muss ich nach dem Tätowieren beachten?</h4>
                {show_eight? <p>Wie du das Tattoo zu pflegen hast und was du nach dem Stechen auf jeden Fall beachten solltest, erklärt Bottel dir am Tag deines Termins ausführlich.</p> : null}
            </div>
            <div className="scar">
                <h4 onClick={()=>setShow_nine(!show_nine)} style={{cursor:'pointer'}}>Kann man über Narben tätowieren?</h4>
                {show_nine? <p>Grundsätzlich: ja! Je älter und verwachsener die Narbe ist, umso besser wird natürlich das Ergebnis. Im Zweifel raten wir dir, vor deinem Termin mit Bottel zu sprechen und ihm deine Narbe zu zeigen.</p> : null}
            </div>
            <div className="pain">
                <h4 onClick={()=>setShow_ten(!show_ten)} style={{cursor:'pointer'}}>Wie schmerzhaft ist ein Tattoo?</h4>
                {show_ten? <p>Viele fragen oft: "Tut das weh?". Ganz klar: Ja! Wir würden dich anlügen, wenn wir das Gegenteil behaupten würden. Aber: Ein Großteil unserer Kundschaft ist überrascht davon, wie gut man das Stechen eines Tattoos aushalten kann. Klar, zwickt und piekst es zwischendurch und man kann seinen Nachmittag sicher entspannter verbringen, aber das Ergebnis überzeugt immer. Übrigens: Wir raten ganz stark davon ab, sich die Körperstelle deines neuen Tattoos nach dem Schmerzlevel auszusuchen, denn jeder Mensch hat ein anderes Schmerzempfinden. Was ich als schmerzhaft empfinde, kribbelt bei dir vielleicht nur auf der Haut.</p> : null}
            </div>
            <div className="pregnant">
                <h4 onClick={()=>setShow_eleven(!show_eleven)} style={{cursor:'pointer'}}>Kann ich mich Tätowieren / Piercen lassen, wenn ich schwanger bin?</h4>
                {show_eleven? <p>Da ein Tattoo / Piercing für deinen Körper Stress und Schmerzen bedeuten, raten wir davon ab, sich während der Schwangerschaft stechen zu lassen. Genieß deine Schwangerschaft in Ruhe – nach der Geburt deines Kindes haben wir wieder genug Zeit, deinen Körper mit Kunstwerken zu schmücken.</p> : null}
            </div>
            <div className="medicine">
                <h4 onClick={()=>setShow_twelve(!show_twelve)} style={{cursor:'pointer'}}>Ich nehme blutverdünnende Medikamente. Darf ich mich trotzdem Tätowieren / Piercen lassen?</h4>
                {show_twelve? <p>Grundsätzlich ist es auch möglich, sich tätowieren / piercen zu lassen, wenn man Blutverdünner nimmt. Wir würden dich in diesem Fall aber bitten, dich mit Bottel darüber zu unterhalten um so optimale Bedingungen für dein neues Kunstwerk zu schaffen.</p> : null}
            </div>
            <div className="piercings">
                <h4 onClick={()=>setShow_thirteen(!show_thirteen)} style={{cursor:'pointer'}}>Welche Piercings kann ich mir stechen lassen und was kosten diese?</h4>
                {show_thirteen? <p>Unser Angebot an Piercings und deren Kosten findest du unter unseren Leistungen.</p> : null}
            </div>
            <div></div>
        </div>

    )
}

export default Questions