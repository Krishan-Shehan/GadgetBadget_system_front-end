package com;

import model.Research;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ResearchAPI
 */
@WebServlet("/ResearchAPI")
public class ResearchAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
	Research research = new Research();
	
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public ResearchAPI() {
		super();
		// TODO Auto-generated constructor stub
	}

	private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params) {
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {

		}
		return map;
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String output = research.insertResearch(request.getParameter("title"),
				request.getParameter("category"),
				request.getParameter("description"),
				request.getParameter("progress"),
				request.getParameter("estimateBudget"),
				request.getParameter("date"),
				request.getParameter("approvalStatus"),
				request.getParameter("resercherName"),
				request.getParameter("resercherEmail"));
				response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Map paras = getParasMap(request);
		String output = research.updateResearchData(paras.get("id").toString(),
				paras.get("title").toString(),
				paras.get("category").toString(),
				paras.get("description").toString(),
				paras.get("progress").toString(),
				paras.get("estimateBudget").toString(),
				paras.get("approvalStatus").toString(),
				paras.get("resercherName").toString(),
				paras.get("resercherEmail").toString());
				response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		Map paras = getParasMap(request);
		String output = research.deleteResearch(paras.get("userID").toString(),paras.get("forceDelete").toString());
		response.getWriter().write(output);
	}

}
