import classNames from "classnames"
import React from "react"
import { Link } from "gatsby"
import { createLinkFromId } from "../lib/link"
import { id as accomodationsId } from "./content/accomodations"
import { id as coverChargeId } from "./content/cover-charge-and-gifts"
import EmailLink from "./email-link"
import Separator from "./separator"
import "./checklist.css"

const Checklist: React.FC = () => (
  <div id="checklist" className="Checklist">
    <div className="Checklist-inner">
      <h2 className="Checklist-title">Checklista inför bröllopet</h2>
      <Separator />
      <p>Kom ihåg att:</p>
      <div className="Checklist-list-container">
        <ol className={classNames("Checklist-list", "Checklist-list--ordered")}>
          <li className="Checklist-list-item">
            Maila toastparet (<EmailLink />) med information om du/ni:
            <ul
              className={classNames(
                "Checklist-list",
                "Checklist-list--unordered"
              )}
            >
              <li className="Checklist-list-item">behöver någon specialkost</li>
              <li className="Checklist-list-item">
                vill åka med i bussen mellan Umeå och Baggböle Herrgård
              </li>
              <li className="Checklist-list-item">
                vill hålla tal eller spex på bröllopsfesten
              </li>
              <li className="Checklist-list-item">
                vill delta på fredagskvällen
              </li>
              <li className="Checklist-list-item">
                vill delta på lunch på söndagen
              </li>
            </ul>
          </li>
          <li className="Checklist-list-item">
            <Link to={createLinkFromId(accomodationsId)}>Boka hotellrum</Link> -
            vi har möjlighet att erbjuda hotellrum för 650 kr / natt
          </li>
        </ol>
      </div>
    </div>
  </div>
)

export default Checklist
