import styles from "./Color.module.css";

const Color = () => {
  return (
    <div className={styles.color}>
      <div className={styles.frameParent}>
        <div className={styles.colorParent}>
          <div className={styles.textColor}>Color</div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.rectangleDiv} />
          </div>
        </div>
        <div className={styles.colorParent}>
          <div className={styles.textColor}>Text Color</div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
            <div className={styles.frameChild3} />
            <div className={styles.frameChild4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
