package main // 1. Das Paket festlegen (Zwingend erforderlich!)

import (
	"embed" // 2. Damit Go HTML-Dateien "einbacken" kann

	"github.com/wailsapp/wails/v2" // 3. Das Wails-Framework selbst
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

var assets embed.FS // 4. Hier sagen wir Go, wo die HTML-Dateien liegen

func main() {
	// 5. Wir erstellen eine Instanz deiner App-Struktur aus der app.go
	app := NewApp()

	// 6. Die Haupt-Funktion, die das Fenster öffnet
	err := wails.Run(&options.App{
		Title: "Mein Business Tool",
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		OnStartup: app.startup, // Hier verknüpfen wir Go mit dem App-Start
		Bind: []interface{}{
			app, // Hier machen wir deine App-Funktionen für JS sichtbar
		},
	})

	if err != nil {
		println("Fehler:", err.Error())
	}
}
