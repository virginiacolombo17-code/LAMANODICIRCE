import type { Article, Category } from './types'

export const categories: Category[] = [
  { number: '01', title: 'Alchimia e Tradizione Ermetica', description: 'La materia come linguaggio, la trasformazione come metodo.', symbol: '☉', tone: 'gold' },
  { number: '02', title: 'Neuroscienze e Mente', description: 'Mappe contemporanee del cervello e dell’esperienza.', symbol: '⌘', tone: 'green' },
  { number: '03', title: 'Filosofia e Metafisica', description: 'Domande radicali sul reale, sul tempo e sull’essere.', symbol: '∞', tone: 'lilac' },
  { number: '04', title: 'Psicologia e Archetipi', description: 'Immagini interiori, storie e processi di trasformazione.', symbol: '◉', tone: 'copper' },
  { number: '05', title: 'Tarocchi e Simbolismo', description: 'Un lessico visivo da leggere nella sua storia e nei suoi usi.', symbol: '△', tone: 'gold' },
  { number: '06', title: 'Coscienza e Percezione', description: 'Come prende forma il mondo che chiamiamo esperienza.', symbol: '◌', tone: 'lilac' },
  { number: '07', title: 'Dark Feminine', description: 'Figure indocili, potere e genealogie dell’ombra.', symbol: '♀', tone: 'copper' },
  { number: '08', title: 'Musica, Arte e Cultura Sperimentale', description: 'Pratiche creative che spostano i confini del sensibile.', symbol: '♫', tone: 'green' },
]

export const articles: Article[] = [
  {
    slug: 'la-materia-che-sogna', title: 'La materia che sogna', subtitle: 'Dall’alchimia del laboratorio alle metafore della trasformazione.', category: 'Alchimia e Tradizione Ermetica', date: '12.11.2025', readingTime: 8, author: 'Redazione', excerpt: 'Che cosa resta dell’alchimia quando smettiamo di cercarvi una chimica segreta? Forse un modo di fare domande alla materia.', visual: 'orbit',
    body: [
      { type: 'paragraph', text: 'Per secoli l’alchimista ha guardato la materia come qualcosa di più di un oggetto inerte. Nei testi, nelle immagini e nei gesti del laboratorio, la trasformazione materiale diventava anche una domanda sul cambiamento: che cosa significa mutare, e che cosa rimane di ciò che muta?' },
      { type: 'heading', text: 'Un linguaggio storico, non una scienza segreta' },
      { type: 'paragraph', text: 'L’alchimia appartiene a tradizioni storiche diverse e complesse. Non è una forma anticipata della chimica moderna, né una prova di corrispondenze universali. È un insieme di pratiche, teorie e immagini che possiamo studiare nei loro contesti, senza appiattirne le differenze.' },
      { type: 'quote', text: 'La metafora illumina una domanda; non sostituisce la prova.' },
      { type: 'paragraph', text: 'Leggere oggi un’immagine alchemica significa attraversare più piani: la storia delle tecniche, la cultura materiale, la filosofia naturale e le interpretazioni simboliche. Tenerli distinti non impoverisce il simbolo. Gli restituisce la sua profondità.' },
      { type: 'heading', text: 'La trasformazione come domanda' },
      { type: 'paragraph', text: 'Il laboratorio contemporaneo non cerca la pietra filosofale. Può però ritrovare nella vecchia immagine una domanda fertile: quali processi rendono possibile una trasformazione? E come distinguiamo ciò che osserviamo da ciò che desideriamo vedere?' },
      { type: 'note', text: 'Nota editoriale — Questo testo propone una lettura storico-filosofica. Non presenta l’alchimia come pratica scientificamente validata.' },
    ], references: ['Lynn Thorndike, A History of Magic and Experimental Science, Macmillan, 1923–1958.', 'Lawrence M. Principe, The Secrets of Alchemy, University of Chicago Press, 2013.']
  },
  {
    slug: 'la-percezione-e-una-ipotesi', title: 'La percezione è un’ipotesi', subtitle: 'Il cervello non registra il mondo: lo incontra attraverso modelli.', category: 'Neuroscienze e Mente', date: '04.11.2025', readingTime: 6, author: 'Redazione', excerpt: 'Tra segnali sensoriali e aspettative, la percezione diventa un dialogo continuo con ciò che crediamo di vedere.', visual: 'eye',
    body: [
      { type: 'paragraph', text: 'Vedere sembra un gesto semplice: il mondo è davanti a noi e gli occhi lo raccolgono. Ma la percezione è un processo attivo, costruito dall’incontro tra segnali sensoriali, attenzione e contesto.' },
      { type: 'heading', text: 'Modelli, segnali, incertezza' },
      { type: 'paragraph', text: 'Le teorie contemporanee esplorano in modi diversi come il sistema nervoso integri informazioni incomplete. Sono modelli di ricerca in evoluzione, non formule che spiegano da sole l’intera esperienza cosciente.' },
      { type: 'quote', text: 'La sensazione non è una finestra trasparente: è un incontro.' },
      { type: 'paragraph', text: 'Un’illusione ottica rende visibile il lavoro che di solito resta silenzioso: la mente organizza, confronta e corregge. Questo non significa che ognuno inventi un mondo privato, ma che l’esperienza dipende da processi che vale la pena indagare.' },
      { type: 'note', text: 'Nota editoriale — Le affermazioni scientifiche richiedono verifica bibliografica prima della pubblicazione definitiva.' },
    ], references: ['Riferimenti scientifici da verificare a cura della redazione prima della pubblicazione.']
  },
  {
    slug: 'il-simbolo-non-e-una-prova', title: 'Il simbolo non è una prova', subtitle: 'Saper distinguere i modi in cui conosciamo il mondo.', category: 'Filosofia e Metafisica', date: '28.10.2025', readingTime: 5, author: 'Redazione', excerpt: 'Un simbolo può generare senso e orientare una domanda. Non per questo diventa un dato empirico.', visual: 'geometry',
    body: [
      { type: 'paragraph', text: 'Un’immagine può cambiare il modo in cui guardiamo una domanda. Ma interpretare un’immagine e verificare un’affermazione empirica sono attività differenti, con criteri e responsabilità differenti.' },
      { type: 'heading', text: 'Pluralità senza confusione' },
      { type: 'paragraph', text: 'La ricerca storica ricostruisce contesti. La filosofia argomenta. Le scienze empiriche osservano e mettono alla prova ipotesi. La pratica simbolica crea significati e percorsi interpretativi. Possono dialogare senza diventare la stessa cosa.' },
      { type: 'quote', text: 'La curiosità apre il confronto; il rigore ne custodisce i confini.' },
      { type: 'paragraph', text: 'Quando un simbolo ci parla, possiamo ascoltarlo senza trasformare la risonanza personale in una legge della natura. È in questa distinzione che l’immaginazione incontra la responsabilità.' },
    ], references: []
  },
  {
    slug: 'la-notte-ha-molti-nomi', title: 'La notte ha molti nomi', subtitle: 'Figure femminili, potere e genealogie dell’ombra.', category: 'Dark Feminine', date: '16.10.2025', readingTime: 7, author: 'Redazione', excerpt: 'Un atlante aperto di figure che resistono alle narrazioni addomesticate.', visual: 'moon',
    body: [
      { type: 'paragraph', text: 'La notte, nelle storie, è raramente soltanto assenza di luce. Può diventare spazio di passaggio, luogo di paura o territorio di conoscenza. Le figure femminili che la abitano cambiano con chi le racconta.' },
      { type: 'heading', text: 'Leggere le genealogie' },
      { type: 'paragraph', text: 'Parlare di “femminile oscuro” richiede cautela: non è un’essenza universale né una categoria neutra. È un campo di immagini e interpretazioni attraversato da storia, cultura e rapporti di potere.' },
      { type: 'quote', text: 'L’ombra non è una risposta: è il luogo da cui cominciare a interrogare la storia.' },
      { type: 'paragraph', text: 'Rileggere queste figure significa chiedersi chi abbia avuto il potere di nominarle e quali possibilità si aprano quando ne ascoltiamo le versioni molteplici.' },
    ], references: []
  },
  {
    slug: 'ascoltare-le-forme', title: 'Ascoltare le forme', subtitle: 'Musica, pattern e la geometria invisibile dell’attenzione.', category: 'Musica, Arte e Cultura Sperimentale', date: '02.10.2025', readingTime: 4, author: 'Redazione', excerpt: 'Un percorso tra ripetizione, sorpresa e il modo in cui il suono ci orienta nel tempo.', visual: 'sound',
    body: [
      { type: 'paragraph', text: 'La musica organizza il tempo senza fermarlo. Una ripetizione crea attesa; una deviazione la trasforma. In questa tensione si apre uno spazio di ascolto.' },
      { type: 'heading', text: 'Il ritmo come esperienza' },
      { type: 'paragraph', text: 'Possiamo descrivere un’onda sonora, misurare frequenze e analizzare strutture. Ma la descrizione non esaurisce l’esperienza di ascoltare: la mette a fuoco da un’altra prospettiva.' },
      { type: 'quote', text: 'Tra il pattern e la sua rottura, l’orecchio immagina il prossimo istante.' },
      { type: 'paragraph', text: 'L’arte sperimentale gioca proprio con queste aspettative. Non perché riveli una legge cosmica, ma perché ci fa sentire in modo nuovo il lavoro della percezione.' },
    ], references: []
  },
]
