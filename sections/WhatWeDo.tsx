export type CardItem = {
    title: string;
    subtitle: string;
    paragraph: string;
    description: string;
}

export interface Props {
    cards: CardItem[];
}

export default function Contact(
    { cards }: Props) {
    return (
        <div class="flex flex-row justify-around">
            <div class="flex flex-col items-center justify-center">
                <div class="card-title">
                    <h1>{card.title}</h1>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{card.subtitle}</h2>
                        <p>{card.paragraph}</p>
                    </div>
                    <div class="card-body bg-secondary text-center">
                        <p class="font-bold">{card.description}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="card-title">
                    <h1>{card.title}</h1>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{card.subtitle}</h2>
                        <p>{card.paragraph}</p>
                    </div>
                    <div class="card-body bg-secondary text-center">
                        <p class="font-bold">{card.description}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="card-title">
                    <h1>{card.title}</h1>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{card.subtitle}</h2>
                        <p>{card.paragraph}</p>
                    </div>
                    <div class="card-body bg-secondary text-center">
                        <p class="font-bold">{card.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}