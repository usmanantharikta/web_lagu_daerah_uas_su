<?php

if(!$_POST['page']) die("0");

$page = (int)$_POST['page'];

if(file_exists('pages/page_'.$page.'.html'))
echo file_get_contents('pages/page_'.$page.'.html');

else echo '<h1 class="text-warning"> Maaf saat halaman ini masih belum tersedia !!!!!!!!!!!!!!!!!!!!</h1>';
?>
