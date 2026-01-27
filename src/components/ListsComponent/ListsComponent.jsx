function ListsComponent() {
  return (
    <div>
      <h2>Lists</h2>

      <h3>Неупорядоченный список</h3>
      <ul>
        <li>Элемент 1</li>
        <li>
          Элемент 2
          <ul>
            <li>Вложенный элемент</li>
          </ul>
        </li>
      </ul>

      <h3>Упорядоченный список</h3>
      <ol>
        <li>Пункт 1</li>
        <li>
          Пункт 2
          <ol>
            <li>Вложенный пункт</li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default ListsComponent;
