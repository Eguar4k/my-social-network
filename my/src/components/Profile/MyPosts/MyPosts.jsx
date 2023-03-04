import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  debugger;
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} LiksCounter={p.liksCounter} />
  ));

  // Создаем ссылку для взаимодействия тексэрия и кнопки
  let newPostElem = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElem.current.value;
    props.upNewPostText(text);
  };
  // (Lessons 31,32,33) value,  каждый символ в textarea, мы берем из BLL, в стейте.Делаем мы это через props.
  // Чтобы добавить каждый символ в стейт, т.е.наше value, мы используем обработчик onChange.Программируем наш onChange,
  // чтобы value(символ который мы  нажали) передавался в стейт.Делаем это через функцию update, которая должна лежать со
  // стейтом в BLL.Прокидываем эту функцию через props в нашу компоненту.В обработчике пишем, вызови update(со значением
  // value(символ)).т.е.то, что мы ввели, через функцию записывается в какой - то массив в стейте.А textarea говорит: О!
  // Сейчас кто - то ввел символ и  мой value стал тем, что ввели.Быстренько отображаю это, в поле ввода.Получается,
  // сначала поменялся state в BLL, а потом Ui в textarea.Это концепция Flux архитектуры.

  return (
    <div className={s.myposts} posts={props.posts}>
      <div>
        <textarea
          ref={newPostElem}
          value={props.newPostText}
          onChange={onPostChange}
        />
      </div>

      <div>
        <button classeName={s.button} onClick={onAddPost}>
          Add post
        </button>
      </div>
      {postsElement}
    </div>
  );
};
export default MyPosts;
