// Exercice 3
interface Vehicule {
    marque: string;
    modele: string;
    annee: number;
    kilometrage: number;
}

interface Test {
    testFunction(): void;
}

class Voiture implements Vehicule, Test {
    marque: string;
    modele: string;
    annee: number;
    kilometrage: number;
    constructor(marque: string, modele: string, annee: number, kilometrage: number) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.kilometrage = kilometrage;
    }

    rouler(distance: number): void {
        this.kilometrage += distance;
    }

    testFunction(): void {
        console.log('test function')
    }

    readValues() {
        console.log(`marque : ${this.marque}\n
        modele : ${this.modele}\n
        annee : ${this.annee}\n
        kilometrage : ${this.kilometrage}`)
    }
}

const voiture: Voiture = new Voiture('Renault', 'Clio', 2023, 10000);
voiture.rouler(50)
voiture.testFunction()
voiture.readValues()