// Write all the code here
import React from "react";
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";
const Footer = () => {
return (
<footer>
<div>
<h2>Hamburguesería</h2>
<p>Intentamos darte el mejor sabor posible.</p>
<br />
<em>Prestamos atención a tus comentarios.</em>
<strong>Todos los derechos reservados 2023 @hamburgueseria</strong>
</div>
<aside>
<h4>Síguenos</h4>
<a href="https://youtube.com/">
<AiFillYoutube />
</a>
<a href="https://instagram.com/">
<AiFillInstagram />
</a>
</aside>
</footer>
);
};
export default Footer;