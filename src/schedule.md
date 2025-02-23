# Ütemezés

Az órák csütörtökönként a BC.2.202-ben vannak (távoktatásban, MS Teams-en), neptun szerint 09:50-12:25 között előadás és 12:35-13:20 között gyakorlat. (Ezek aránya valamint közte a szünet az aktuális előadásanyag és az igények szerint módosulhat). A „gyakorlat” nem labor, hanem sokkal inkább konzultáció!

|hét |dátum      |előadás                    |gyakorlat                                                               |
|---:|:---------:|:-------------------------:|:----------------------------------------------------------------------:|
|  1.|  02. 20.  | Napi munka, verziókezelés | feladat és a munkafolyamat átfogó ismertetése, avalonia tutorial       |
|  2.|  02. 27.  | Software Architecture I.  | git, GitHub, IDE és warmup feladat ismertetése, csapatsorsolás         |
|  3.|  03. 06.  | Software Architecture II. | Sprint Planning, Design előkészítése                                   |
|  4.|  03. 13.  | Agile, SCRUM, Kanban      | Work Breakdown Structure (WBS) és design bemutatása                    |
|  5.|  03. 20.  | Verification & validation | konzultáció                                                            |
|  6.|  03. 27.  | Review culture            | konzultáció                                                            |
|  7.|  04. 03.  | Continuous Integration    | konzultáció                                                            |
|  8.|**04. 10.**| **1. demo**               | retrospektív, Sprint Planning, Design előkészítése                     |
|  9.|  04. 17.  | Rektori szünet            | Rektori szünet, online konzultáció előre egyeztetett időpontban        |
| 10.|  04. 24.  | Rektori szünet            | Rektori szünet, online konzultáció előre egyeztetett időpontban        |
| 11.|  05. 01.  | Munkaszüneti nap          | Munkaszüneti nap, online konzultáció előre egyeztetett időpontban      |
| 12.|  05. 08.  | ASPICE in nutshell        | konzultáció                                                            |
| 13.|**05. 15.**| Összefoglalás, **2. demo**| retrospektív, tárgy feedback                                           |
| 14.|**05. 22.**| **Zárthelyi dolgozat**    |                                                                        |


## Házi feladatok

Határidő (hét)| feladat
---|--------
2  | [Avalonia Tutorial teljesítése](https://github.com/AvaloniaUI/Avalonia.Samples/tree/main/src/Avalonia.Samples/CompleteApps/SimpleToDoList)
3  | Warmup feladat
4  | design dokumentumok bemutatása (statikus és dinamikus)
 

## Gantt diagram
<div class="mermaid">
    gantt
    tickInterval 1week
    weekday thursday
    dateFormat  YYYY-MM-DD
    axisFormat  %m-%d
    title 2024/25 tanév II. félév
    Bemutatkozás :milestone, 2025-02-20, 0d
    section Avalonia
        Avalonia-tutorial: active, avalonia-tutorial, 2025-02-20, 1w
    section Warm-up
        Warm-up :active, warmup, 2025-02-27, 1w
    Csapat sorsolás :milestone, after warmup, 0d
    section Sprint 1
        Sprint 1 :active, sprint1, after warmup, 5w
    Demo 1 :milestone, after sprint1, 0d
    section Sprint 2
        Sprint 2 :active, sprint2, after sprint1, 5w
    Demo 2 :milestone, after sprint2, 0d
    Zárthelyi :milestone, 2025-05-22, 0d
    click sprint1 href "./sprints/sprint_1.html"
    click sprint2 href "./sprints/sprint_2.html"
</div>

<!--
# Házi feladat - 1. hét

1. GitHub fiók létrehozása
    * ha még nincs
2. 11 JDK telepítése, mivel a szoftvert Java nyelven kell elkészíteni
    * ha nincs fönt
3. Fejlesztőkörnyezet telepítése és beállítása
    * IntelliJ IDEA az ajánlott és támogatott eszköz
4. Git és GitHub oktatóanyagok elolvasása
    * ha vannak hiányosságok
    * az órán nincs idő szájbarágósan git használatot oktatni, erre vannak interaktív oktatófelületek
    * ez mindenkinek egyéni felelőssége, ám ha konkrét kérdések merülnek fel, akkor ezekre természetesen kitérünk
5. Git repó klónozása
6. Kód futtatása a futtató- és a fejlesztőkörnyezet beállításainak tesztelése céljából
7. A jegyzet és az abban taglalt segédanyagok megismerése
8. Az elkészítendő szoftver átgondolása (lásd readme), statikus és dinamikus modell elkészítése komponens szinten
    * Ennek terjedelme (az órái példa alapján): egy absztrakciós szint a négyfelé bontás (kb. user story szint), és egy az ez alatti egyel, minden komponens még egy kibontása, kb. egyenrangú komponensek létrehozására - osztály szintre nem mennék le, még ha a végén ezekből akár osztály is lesz. Szóval kettő struktúra, kettő dinamikus viselkedést leíró diagram, egy magasabb és egy alacsonyabb absztrakciós szinten. Hogy konkrétan hány building block, azt mindenkinek "érzésre" kell megállapítania, ezért szubjektív az architektúra.
    * Ez egy egyéni feladat, hiszen még nincsenek csapatok. Az elkészítéshez javasolt eszközök: MS Visio, https://www.draw.io/.
    * Az elkészült diagramoknak a következő órán bemutatható állapotban kell lenniük.
-->



# Demók

A félév során a csapatok két alkalommal prezentálják az elvégzett munkát. A „demók” az _elkészült_ szoftver megrendelőnek való bemutatását szimulálják. Nem a kódra vagyunk kíváncsiak, hanem működés közben szeretnénk látni, hogy a szoftver teljesíti feladatban foglalt követelményeket.
A bemutatás során, a `master` branchre befogadott kódot vesszük figyelembe, minden egyéb _„nem készült el határidőre”_, azaz értékelhetetlen.

[Bővebben...](demo.md)


# Zárthelyi

Ismert, Moodle-ös teszt, 50 kérdéssel, erre 70 perc áll majd a rendelkezésre. Minden kérdéshez 4 válaszlehetőség, amelyek közül pontosan egy a helyes. (Vannak „az alábbiak közül melyik NEM helyes” felépítésű kérdések is.) A rendelkezésre álló idő alatt kérdéseket tetszőleges alkalommal felül lehet vizsgálni, módosítani a teszt „lezárása” után azonnal kiértékelésre is kerül.


# Jegy kialakítása

1. gyakorlati jegy (sprintek átlaga) × 0.7 + ZH jegy × 0.3

2. Ha nincs gyakorlati teljesítmény, akkor a félév elégtelen, függetlenül attól, hogy a ZH hogy sikerült.
3. Mivel a sprintekre csapatok kapnak jegyet, mindenki kitölt egy csapattárs értékelő kérdőívet arról, hogy a csapaton belüli munka miképpen oszlott meg.

A ZH százalék jegyre számítását az alábbi intervallumokkal végezzük:

tól | ig | jegy
-- | --- | --
 0 |  49 | 1
50 |  59 | 2
60 |  69 | 3
70 |  79 | 4
80 | 100 | 5
