import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <ul>
        <li>
          <button>Annulla</button>
        </li>
        <li>
          <button>Salva</button>
        </li>
      </ul>
      <div>
        <Input label="Titolo" />
        <Input label="Descrizione" textarea />
        <Input label="Data fine progetto" />
      </div>
    </div>
  );
}
