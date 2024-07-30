import React from "react";
import "./Header.css";
import heder from "../../assest/images/Students-in-the-school-classroom.jpg";
import Button from "../UI/botton/botton";

const Header = () => {
  const seenProgramHandler = () => {
    alert("seen");
  };
  return (
    <React.Fragment>
    <div >

      <div className="header">
        <div className="header-img">
          <img src={heder} />
        </div>
        <div className="header-items">
          <h1>دانش آموزان با اعتماد به نفس موفق ترند</h1>
          <Button buttonType="sucsses" clicked={seenProgramHandler}>
            مشاهده برنامه ها
          </Button>
        </div>
      </div>
      <div className="homePage-text">
        <p>
          اگر می خواهید چند کاراکتر را انتخاب کنید، کلید Shift را نگه داشته و
          سپس با arrow keys (کلیدهای جهت نما روی کیبورد - بالا، پایین، چپ و
          راست) به سمت راست یا چپ حرکت کنید. با این کار کاراکتر به کاراکتر حرکت
          خواهید کرد و در عین حال آن کاراکترها را انتخاب می کنید. اگر می خواهید
          به جای کاراکتر به کاراکتر به صورت کلمه به کلمه حرکت کنید باید کلیدهای
          Ctrl + Shift + arrow keys را فشار دهید. با نگه داشتن کنترل و شیفت می
          توانید کلمه به کلمه حرکت کرده و آن ها را انتخاب کنید.
        </p>
        <p>
          اگر می خواهید چند کاراکتر را انتخاب کنید، کلید Shift را نگه داشته و
          سپس با arrow keys (کلیدهای جهت نما روی کیبورد - بالا، پایین، چپ و
          راست) به سمت راست یا چپ حرکت کنید. با این کار کاراکتر به کاراکتر حرکت
          خواهید کرد و در عین حال آن کاراکترها را انتخاب می کنید. اگر می خواهید
          به جای کاراکتر به کاراکتر به صورت کلمه به کلمه حرکت کنید باید کلیدهای
          Ctrl + Shift + arrow keys را فشار دهید. با نگه داشتن کنترل و شیفت می
          توانید کلمه به کلمه حرکت کرده و آن ها را انتخاب کنید.
        </p>
      </div>
    </div>
      
    </React.Fragment>
  );
};

export default Header;
