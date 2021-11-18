export class PerformanceModel {

    translation = {
        "cardio": "Cardio",
        "energy": "Energie",
        "endurance": "Endurance",
        "strength": "Force",
        "speed": "Vitesse",
        "intensity": "Intensité"
    };


    constructor(result) {
        this.id = result.data.userId
        this.kind = result.data.kind
        this.data = result.data.data.map((el) => ({
            value: el.value,
            kind: this.translation[this.kind[el.kind]]
        }))
    }
}