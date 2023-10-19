import Styles from "./styles.module.css";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";

const Task = (props) => {
  const { task, handleOnChange, checkedTasks, handleOpenModal } = props;
  return (
    <div className={Styles.task}>
      <div>
        <input
          type="checkbox"
          onChange={() => handleOnChange(task.id)}
          checked={checkedTasks.has(task.id)}
        />
        <p>Title: {task.title}</p>
        <p>Description: {task.description}</p>
      </div>
      <div className={Styles.iconsContainer}>
        <button
          onClick={() => handleOpenModal("isOpenHandleDeleteModal", task.id)}
          disabled={checkedTasks.has(task.id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
        <button disabled={checkedTasks.has(task.id)}>
          <img src={editIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default Task;
