import { Directive, Input, ElementRef, OnChanges, AfterViewChecked, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[highligth]'
})
export class HighligthDirective implements OnChanges, AfterViewChecked {

  // Palabra a buscar
  @Input('search') word: string;

  // Indica si esta o no renderizada el HTML
  private viewRendered: boolean;

  constructor(private el: ElementRef) {
    this.viewRendered = false;
  }

  ngAfterViewChecked(): void {
    this.viewRendered = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Cuando cambie el atributo word, se vuelve a ejecutar
    if (changes["word"]) {
      this.highlightSearchTerm();
    }
  }

  /**
   * Marca las correspondencias
   */
  public highlightSearchTerm() {

    // Solo se activa cuando haya una palabra o mas de 3 letras
    if (!this.word || this.word.length < 3) {
      // Solo si esta renderizado
      if (this.viewRendered) {
        this.removeMarks();
      }

    } else {

      if (this.el.nativeElement) {
        // Reseteo
        this.removeMarks();

        // Pongo las marcas
        this.putMarks();
      }

    }

  }

  /**
   * Pone las etiquetas <mark> entre las coincidencias
   */
  private putMarks() {
    const searchRegex = new RegExp(this.word, 'gmi');
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.replace(searchRegex, match => `<mark>${match}</mark>`);
  }

  /**
   * Elimina las marcas
   */
  private removeMarks() {

    this.el.nativeElement.querySelectorAll("*").forEach(element => {
      // Busco las etiquetas mark
      const regex = new RegExp('<mark>|</mark>', 'gi');
      // Remplazo las marcas por una cadena vacia
      const cleanText = element.parentNode.innerHTML.replace(regex, '');
      element.parentNode.innerHTML = cleanText;
    });

  }

}
