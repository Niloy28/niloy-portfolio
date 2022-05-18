import { nanoid } from "nanoid";
import { ItchWidgetProps } from "./ItchWidgetProps";

export default function PixelShooter({ dark }: ItchWidgetProps) {
	return (
		<iframe
			title={nanoid()}
			frameBorder="0"
			src={`https://itch.io/embed/980004${dark ? "?dark=true" : ""}`}
			width="552"
			height="167"
		>
			<a href="https://niloy28.itch.io/pixel-shooter">
				Pixel Shooter by Wander Studio
			</a>
		</iframe>
	);
}
