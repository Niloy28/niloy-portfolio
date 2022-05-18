import { nanoid } from "nanoid";
import { ItchWidgetProps } from "./ItchWidgetProps";

export default function ConceptFantasy({ dark }: ItchWidgetProps) {
	return (
		<iframe
			title={nanoid()}
			frameBorder="0"
			src={`https://itch.io/embed/1378901${dark ? "?dark=true" : ""}`}
			width="552"
			height="167"
		>
			<a href="https://niloy28.itch.io/concept-fantasy">
				Concept Fantasy by Wander Studio
			</a>
		</iframe>
	);
}
