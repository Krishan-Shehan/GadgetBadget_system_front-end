$(document).ready(function()
{
if ($("#alertSuccess").text().trim() == "")
{
$("#alertSuccess").hide();
}
$("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true)
	{
	$("#alertError").text(status);
	$("#alertError").show();
	return;
	}
	
	// If valid------------------------
	var type = ($("#id").val() == "") ? "POST" : "PUT";
	$.ajax(
	{
	url : "ResearchAPI",
	type : type,
	data : $("#formItem").serialize(),
	dataType : "text",
	complete : function(response, status)
	{
	onItemSaveComplete(response.responseText, status);
	}
	});
});


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#id").val($(this).data("itemid"));
	$("#title").val($(this).closest("tr").find('td:eq(1)').text());
	$("#category").val($(this).closest("tr").find('td:eq(2)').text());
	$("#description").val($(this).closest("tr").find('td:eq(3)').text());
	$("#progress").val($(this).closest("tr").find('td:eq(4)').text());
	$("#estimateBudget").val($(this).closest("tr").find('td:eq(5)').text());
	$("#date").val($(this).closest("tr").find('td:eq(6)').text());
	$("#approvalStatus").val($(this).closest("tr").find('td:eq(7)').text());
	$("#resercherName").val($(this).closest("tr").find('td:eq(8)').text());
	$("#resercherEmail").val($(this).closest("tr").find('td:eq(9)').text());
});

//UPDATE==========================================
$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "ResearchAPI",
		type : "DELETE",
		data : "id=" + $(this).data("itemid"),
		dataType : "text",
		complete : function(response, status)
		{
			onItemDeleteComplete(response.responseText, status);
		}
	});
});


//CLIENT-MODEL================================================================
function validateItemForm()
{
		
		if ($("#title").val().trim() == "")
		{
			return "Insert Title.";
		}
		
		
		if ($("#category").val().trim() == "")
		{
			return "Insert Category.";
		}
		
		if ($("#description").val().trim() == "")
		{
			return "Insert Description.";
		}
		
		if ($("#progress").val().trim() == "")
		{
			return "Insert Progress.";
		}
		
		if ($("#estimateBudget").val().trim() == "")
		{
			return "Insert  EstimateBudget.";
		}
		
				
		if ($("#approvalStatus").val().trim() == "")
		{
			return "Insert ApprovalStatus.";
		}
		
		if ($("#resercherName").val().trim() == "")
		{
			return "Insert ResercherName.";
		}
		
		if ($("#resercherEmail").val().trim() == "")
		{
			return "Insert ResercherEmail.";
		}
		return true;
}



function onItemSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
		} else if (status == "error")
		{
			$("#alertError").text("Error while saving.");
			$("#alertError").show();
		} else
		{
			$("#alertError").text("Unknown error while saving..");
			$("#alertError").show();
	}
		$("#id").val("");
		$("#formItem")[0].reset();
}



function onItemDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
		} else if (status == "error")
		{
			$("#alertError").text("Error while deleting.");
			$("#alertError").show();
		} else
		{
			$("#alertError").text("Unknown error while deleting..");
			$("#alertError").show();
	}
}



