export class PerformanceModel {
    constructor(result) {
        this.id = result.data.userId
        this.kind = result.data.kind
        this.data = result.data.data.map((el) => ({
            value: el.value,
            kind: this.kind[el.kind]
        }))
    }
}