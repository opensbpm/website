---
title: Features
body_classes: title-center title-h1h2
---

# Arbeitsabläufe leichtgemacht
#### Subjektorientierte Workflows einfach erstellen und ausführen.
**OpenSBPM** fügt das Subjekt als grammatikalisches Element in die Arbeitsablaufdefinition 
hinzu und ermöglicht so eine einfachere Sicht der Prozesse und ein besseres Verständnis 
aller Arbeitsabläufe einer Organisation.

![Subjektworkflow](sbpm-workflow.svg?classes=caption,img-fluid "Subjektorientierter Arbeitsablauf")

---

# Einfach und intuitiv
Das Modell des Arbeitsablauf ist änhlich Strukturiert wie die täglich gesprochene
Sprache. Dadurch werden Prosesse intuitiv verständlich, die Komplexität des 
Modell wird reduziert und der gesamte Arbeitsablauf wird einfach.

#### Beispiel Dienstreiseantrag
Am Beispiel Dienstreiseantrag werden die unterschiedlichen Stati sichtbar. Aus 
der Perspektive des Antragsteller sind folgenden Schritte notwendig:
* Dienstreiseantrag ausführen (Funktionsstatus mit Start)
* Dienstreiseantrag an den Vorgesetzten schicken (Sendestatus)
* Antwort von Vorgesetzten emfpangen (Emfpangsstatus)
* Im Fall einer Ablehung 
    * Prozessende (Funktionsstatus mit Ende)
* Im Fall einer Genehmigung 
    * Dienstreise antreten (Funktionsstatus)
    * Prozessende (Funktionsstatus mit Ende)

Grafische Darstellung
![Beispiel Dienstreiseantrag](travelrequest.svg?classes=caption,img-fluid "Dienstreiseantrag aus der Perspektive des Antragsteller")

---

# Subjektverhalten
#### Die Kommunikation der Akteure kann im Subjektverhalten grafisch dargestellt werden.
Die Kommunikation aller beteiligten Subjekte eines Workflows kann im 
Subjektverhalten dargestellt werden. Die Arbeitsbeziehung und der Lebenslauf der 
beteiligten Dokumente wird sichtbar.

![Subjektverhalten](subject-activity.svg?classes=caption,img-fluid "Subjektverhalten")

---

# Prozesslandschaften
Alle Prozesse einer Organisation und deren Beziehung untereinander kann in 
Prozesslandschaften visualisiert werden. Dadurch kann eine komplette 
Organisation und die Arbeitsbeziehung der Akteuere untereinander aus der 
Workflowperspektive betrachtet werden.

---

# Einsatzbereiche
In jeder Organisation, sei es ein multinationaler Konzern oder ein Kleinstbetrieb, 
ein wohltätiger Verein oder eine offentliche Behörde, sobald mehr als eine Person 
mit einem computergestüzten System kommuniziert und dabei Daten erfasst oder 
verändert werden, liegt dieser Tätigkeit ein meist komplexerer und oftmals nicht 
direkt sichtbarer Arbeitsablauf zugrunde. **OpenSBPM** bietet eine einfache 
Möglichkeit die Komplexität in der Modellierung solcher Workflows mithilfe 
einfacher grammatikalischer Mittel zu reduzieren und die Kommuniaktion zwischen 
Person untereinander und den Informationsaustausch zwischen digitalen Services 
sowie die Kommunikation zwischen Mensch und Maschine intuitiv zu vereinfachen 
und allfällige Problem bereits in der Designphase zu vermeiden.

---

# Analyse
Prozesse können automatisiert ausgeführt und analysiert werden. Mit dem 
entsprechenden System können Ablaufdefinitionen vor dem Rollout in einer abgeschotteten 
Umgebung automatisiert "durchgeschaltet" werden. Dabei wir der Anwender durch 
einen Bot ersetzt. Der Bot befüllt die einzelnen Task innerhalb von Sekunden 
zufallsbasiert. Dadurch kann die Bearbeitsungszeit einzelner Abläufe auf Sekunden 
reduziert werden und fehlerhafte oder unvollständige Ablaufdefinitionen können 
vor dem eigentlichen Rollout erkannt werden und vermieden werden. Es können beliebig
 viele Prozesse einer Prozesslandscahft in einem Testsystem verarbeitet werden. 
Werden die Zeiten der Verweildauer analysiert können so bereits Engpässe im 
Vorfeld erkannt und vermiden werden.

---

# Ausblick
Alle Prozesse einer Organisation können als Prozesslandschaft betrachtet werden. 
Der Schaltzeiten könnten visualisert werden und so ein gesamter Überlick über 
alle Abläufe einer Organisation visualisiert und verbessert werden.
