<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@page import = "model.Research" %>
      
      
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Research Management</title>
	<link rel="stylesheet" href="Views/bootstrap.min.css">
	<script src="Components/jquery-3.2.1.min.js"></script>
	<script src="Components/research.js"></script>
</head>

<body>
		<div class="container"><div class="row"><div class="col-6">
		<h1>Research Management</h1>
		<form id="formItem" name="formItem">
			title:
			<input id="title" name="title" type="text"class="form-control form-control-sm">
			<br> 
			category:
			<input id="category" name="category" type="text"class="form-control form-control-sm">
			<br> 
			description:
			<input id="description" name="description" type="text"class="form-control form-control-sm">
			<br> 
			progress:
			<input id="progress" name="progress" type="text"class="form-control form-control-sm">
			<br>
			estimateBudget:
			<input id="estimateBudget" name="estimateBudget" type="text"class="form-control form-control-sm">
			<br>
			date:
			<input id="date" name="date" type="text"class="form-control form-control-sm">
			<br>
			approvalStatus:
			<input id="approvalStatus" name="approvalStatus" type="text"class="form-control form-control-sm">
			<br>
			resercherName:
			<input id="resercherName" name="resercherName" type="text"class="form-control form-control-sm">
			<br>
			resercherEmail:
			<input id="resercherEmail" name="resercherEmail" type="text"class="form-control form-control-sm">
			<br>
			<input id="btnSave" name="btnSave" type="button" value="Save"class="btn btn-primary">
			<input type="hidden" id="id"name="id" value="">
		</form>
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
		<br>
		<div id="divItemsGrid">
		<%
			Research research = new Research();
			out.print(research.readResearch());
		%>
		</div>
		</div> </div> </div>
</body>
</html>