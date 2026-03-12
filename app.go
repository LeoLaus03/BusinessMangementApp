package main

import (
	"context"
	"fmt"
)

type App struct {
	ctx context.Context //erlaubt Go mit dem Fenster zu kommunizieren, zum Beispiel zum schließen
}

// erstellt eine leere App
func NewApp() *App {
	return &App{}
}

// a *App damit jede funktion die mit a *App beginnt darauf zugreifen kann
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx //ctx speichern
}

// Funktion die in der test.js aufgerufen wird
// func (a *App), damit das JS die Funktion aufrufen kann
// input string, der übergebene Wert mit dem Typ des Wertes
// string, Rückgabewert der Funktion
func (a *App) SaveInDb(input string) string {
	fmt.Println("Text Empfangen: " + input)

	return input
}
