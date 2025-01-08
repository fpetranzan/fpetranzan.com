# **fpetranzan.me**

lang [IT]: [en](https://github.com/fpetranzan/fpetranzan.me/blob/master/README.md) | [it](https://github.com/fpetranzan/fpetranzan.me/blob/master/README_it.md)

**fpetranzan.me** è un progetto personale nato con l'obiettivo di creare un portfolio semplice, per mettere in risalto il contenuto con una grafica e funzionalità minimali. Il sito include una mia descrizione, una panoramica dei miei lavori, e i progetti che ho sviluppato.  
Questo progetto ha rappresentato una sfida personale dandomi la possibilità di sviluppare nuove conoscenze, poiché mi sono avventurato in tecnologie come **Next.js** e **Tailwind CSS**, che non appartengono al mio solito stack da sviluppatore backend.

## **Funzionalità Principali**
- **Cambio Tema**: Supporto per il tema chiaro e scuro.
- **Cambio Lingua**: Localizzazione dei contenuti in più lingue.

## **Tecnologie Utilizzate**
- **Linguaggi e Framework**:
    - Next.js
    - Tailwind CSS
    - React
- **Librerie**:
    - `next`
    - `next-intl`
    - `next-themes`
    - `react`
    - `react-icons`
- **Strumenti**:
    - Docker

## **Installazione**
Il progetto può essere eseguito facilmente tramite **Docker**.

### **Avvio tramite Docker**
1. Clona il repository:
   ```bash
   git clone https://github.com/fpetranzan/fpetranzan.me.git
   cd fpetranzan.me
   ```
2. Crea l'immagine Docker:
   ```bash
   docker build --build-arg SETUP_ENVINROMENT=local -t portfolio .
   ```
   > Puoi specificare l'ambiente con `SETUP_ENVINROMENT` (ad esempio, `local` o `production`). Se non specificato, verrà usato l'ambiente di produzione.
3. Avvia il container:
   ```bash
   docker run --rm -p 3000:3000 portfolio
   ```
4. Apri il browser e visita:  
   [http://localhost:3000/](http://localhost:3000/)

## **Struttura del Progetto**
- **`messages/`**: Contiene i file JSON per la localizzazione dei testi nelle varie lingue.
- **`src/`**: Codice sorgente, suddiviso in:
    - **`pages/`**: Le pagine principali del sito.
    - **`components/`**: Componenti riutilizzabili.
- **`public/`**: File statici come immagini e risorse.