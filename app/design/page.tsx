import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Design System</h1>
          <p className="text-muted-foreground text-lg">
            Farbpalette, Komponenten und Design-Richtlinien für die ToDo Listen App
          </p>
        </div>

        {/* Farbpalette - Primärfarben */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Farbpalette</h2>
          
          <div className="grid gap-8">
            {/* Primärfarben */}
            <Card>
              <CardHeader>
                <CardTitle>Primärfarben</CardTitle>
                <CardDescription>Hauptfarben für wichtige Elemente und Aktionen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ColorSwatch
                    name="Primary"
                    cssVar="--primary"
                    foreground="--primary-foreground"
                    description="Hauptakzentfarbe"
                  />
                  <ColorSwatch
                    name="Secondary"
                    cssVar="--secondary"
                    foreground="--secondary-foreground"
                    description="Sekundäre Akzente"
                  />
                  <ColorSwatch
                    name="Accent"
                    cssVar="--accent"
                    foreground="--accent-foreground"
                    description="Hervorhebungen"
                  />
                  <ColorSwatch
                    name="Destructive"
                    cssVar="--destructive"
                    foreground="--primary-foreground"
                    description="Warnungen & Löschaktionen"
                  />
                  <ColorSwatch
                    name="Muted"
                    cssVar="--muted"
                    foreground="--muted-foreground"
                    description="Gedämpfte Hintergründe"
                  />
                </div>
              </CardContent>
            </Card>

            {/* UI-Farben */}
            <Card>
              <CardHeader>
                <CardTitle>UI-Farben</CardTitle>
                <CardDescription>Basis-Farben für Hintergründe und Oberflächen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ColorSwatch
                    name="Background"
                    cssVar="--background"
                    foreground="--foreground"
                    description="Haupt-Hintergrund"
                  />
                  <ColorSwatch
                    name="Foreground"
                    cssVar="--foreground"
                    foreground="--background"
                    description="Haupt-Text"
                  />
                  <ColorSwatch
                    name="Card"
                    cssVar="--card"
                    foreground="--card-foreground"
                    description="Karten-Hintergrund"
                  />
                  <ColorSwatch
                    name="Popover"
                    cssVar="--popover"
                    foreground="--popover-foreground"
                    description="Overlay-Elemente"
                  />
                  <ColorSwatch
                    name="Border"
                    cssVar="--border"
                    foreground="--foreground"
                    description="Rahmen & Trennlinien"
                  />
                  <ColorSwatch
                    name="Input"
                    cssVar="--input"
                    foreground="--foreground"
                    description="Eingabefelder"
                  />
                  <ColorSwatch
                    name="Ring"
                    cssVar="--ring"
                    foreground="--foreground"
                    description="Focus-Ringe"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Chart Farben */}
            <Card>
              <CardHeader>
                <CardTitle>Chart-Farben</CardTitle>
                <CardDescription>Farben für Diagramme und Visualisierungen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  <ColorSwatch name="Chart 1" cssVar="--chart-1" foreground="--background" />
                  <ColorSwatch name="Chart 2" cssVar="--chart-2" foreground="--background" />
                  <ColorSwatch name="Chart 3" cssVar="--chart-3" foreground="--background" />
                  <ColorSwatch name="Chart 4" cssVar="--chart-4" foreground="--background" />
                  <ColorSwatch name="Chart 5" cssVar="--chart-5" foreground="--background" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typografie */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Typografie</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Heading 1</p>
                  <h1 className="text-4xl font-bold">The quick brown fox jumps over the lazy dog</h1>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Heading 2</p>
                  <h2 className="text-3xl font-semibold">The quick brown fox jumps over the lazy dog</h2>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Heading 3</p>
                  <h3 className="text-2xl font-semibold">The quick brown fox jumps over the lazy dog</h3>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Body Text</p>
                  <p className="text-base">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div className="border-b pb-4">
                  <p className="text-sm text-muted-foreground mb-2">Small Text</p>
                  <p className="text-sm">The quick brown fox jumps over the lazy dog</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Muted Text</p>
                  <p className="text-sm text-muted-foreground">The quick brown fox jumps over the lazy dog</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Komponenten */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Komponenten</h2>
          
          <div className="grid gap-8">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Verschiedene Button-Varianten</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4">Button-Größen</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground mb-4">Disabled State</p>
                  <div className="flex flex-wrap gap-4">
                    <Button disabled>Disabled</Button>
                    <Button variant="secondary" disabled>Disabled</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inputs */}
            <Card>
              <CardHeader>
                <CardTitle>Inputs</CardTitle>
                <CardDescription>Eingabefelder und Formulare</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="input-default">Standard Input</Label>
                    <Input id="input-default" placeholder="Placeholder text..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="input-email">Email</Label>
                    <Input id="input-email" type="email" placeholder="email@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="input-password">Password</Label>
                    <Input id="input-password" type="password" placeholder="••••••••" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="input-disabled">Disabled</Label>
                    <Input id="input-disabled" disabled placeholder="Disabled input" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>Karten-Komponente mit verschiedenen Layouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">This is the card content area where you can place any content.</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Another Card</CardTitle>
                      <CardDescription>With different content</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Cards can contain any kind of content including buttons and forms.</p>
                      <div className="mt-4">
                        <Button size="sm">Action</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing & Radius */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Spacing & Radius</h2>
          
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Border Radius</CardTitle>
                <CardDescription>Definierte Abrundungen für Elemente</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-primary h-20 w-full rounded-sm mb-2"></div>
                    <p className="text-sm">Small (sm)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary h-20 w-full rounded-md mb-2"></div>
                    <p className="text-sm">Medium (md)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary h-20 w-full rounded-lg mb-2"></div>
                    <p className="text-sm">Large (lg)</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-primary h-20 w-full rounded-xl mb-2"></div>
                    <p className="text-sm">Extra Large (xl)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spacing Scale</CardTitle>
                <CardDescription>Konsistente Abstände für Layouts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 4, 6, 8, 12, 16].map((size) => (
                    <div key={size} className="flex items-center gap-4">
                      <div className="w-16 text-sm text-muted-foreground">{size * 4}px</div>
                      <div className="bg-primary h-4" style={{ width: `${size * 4}px` }}></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Dark Mode Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Dark Mode Support</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                Alle Farben und Komponenten unterstützen automatisch den Dark Mode.
                Wechseln Sie den Modus in Ihren System-Einstellungen, um die Dark-Varianten zu sehen.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-6 rounded-lg bg-background border">
                  <h3 className="font-semibold mb-2">Light Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimiert für Tageslicht mit hellen Hintergründen
                  </p>
                </div>
                <div className="p-6 rounded-lg bg-card border">
                  <h3 className="font-semibold mb-2">Dark Mode</h3>
                  <p className="text-sm text-muted-foreground">
                    Angenehm für die Augen bei schwachem Licht
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technische Details */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Technische Details</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Farbformat</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Alle Farben verwenden <strong>OKLCH</strong> (Oklch Color Space)
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Bessere Farb-Konsistenz</li>
                    <li>• Gleichmäßigere Helligkeitsverteilung</li>
                    <li>• Zukunftssicheres Farbformat</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">UI Framework</h3>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• <strong>Shadcn UI</strong> - Komponentenbibliothek</li>
                    <li>• <strong>Radix UI</strong> - Accessible Primitives</li>
                    <li>• <strong>Tailwind CSS</strong> - Utility-first CSS</li>
                    <li>• <strong>CSS Variables</strong> - Theme-Tokens</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-3">Verwendung</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Alle Farben sind als CSS-Variablen verfügbar und können über Tailwind-Klassen verwendet werden:
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-sm">
                  <code>bg-primary text-primary-foreground</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

// Hilfsfunktion für Farb-Swatches
interface ColorSwatchProps {
  name: string;
  cssVar: string;
  foreground: string;
  description?: string;
}

function ColorSwatch({ name, cssVar, foreground, description }: ColorSwatchProps) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className="h-24 flex items-center justify-center font-mono text-sm"
        style={{
          backgroundColor: `var(${cssVar})`,
          color: `var(${foreground})`,
        }}
      >
        {name}
      </div>
      <div className="p-3">
        <p className="font-medium text-sm mb-1">{name}</p>
        {description && (
          <p className="text-xs text-muted-foreground mb-2">{description}</p>
        )}
        <code className="text-xs text-muted-foreground">{cssVar}</code>
      </div>
    </div>
  );
}

