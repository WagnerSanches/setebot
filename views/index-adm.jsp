<%@page import="br.com.challenger.Beans.Usuario"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style type="text/css"><%@include file="../css/_css-admin.css" %></style>
</head>
<script src="../js/_js-autenticar.js"></script>
<!-- <script src="../js/_js-autenticar.js"></script> -->
<body>
        <div id="cabecalho">
            <a href="../index.html">sair</a>
        </div>
        <div id="dv_tabela">
            <table id="tabela">
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>EMAIL</th>
                    <th>DATA NASCIMENTO</th>
                    <th>DELETAR</th>
                </tr>
                
                <%
                
                	List<Usuario> LUsuarios = (List<Usuario>) request.getAttribute("listaUsuarios");
	                	
	                for(Usuario u : LUsuarios) {
	            		out.print("<tr>");
	            		out.print("<td>" + u.getId()+"</td>");
	            		out.print("<td>" + u.getNome()+"</td>");
	            		out.print("<td>" + u.getEmail()+"</td>");
	            		out.print("<td>" + u.getCriacao()+"</td>");
	            		out.print("<td> <a href='javascript:void' id='excluir'><i class='fa fa-close'></i></a> </td>");
	            		out.print("</tr>");
	            	}
                
                %>
            </table>
        </div>
        <div id="fundo">
            <form action="excluirAluno" method="post" id="frm_exc">
                <h1>Excluir aluno ?</h1>
                <input type="text" name="id" id="id" readonly>
                <input type="text" id="nome" readonly>
                <input type="text" id="email" readonly>
                <button>Sim</button>
            </form>
        </div>
    </body>
    <script> <%@include file="../js/_js-adm.js" %></script>
    </html>