<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>

<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>

    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>

    <meta name="WebPartPageExpansion" content="full" />

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/tableStyle.css" />
    <link type="text/css" href="../Content/bootstrap.min.css" rel="stylesheet" />

    <!-- Add your JavaScript library to the following file -->
    <script type="text/javascript" src="../Scripts/angular.min.js"></script>
    <script type="text/javascript" src="../Scripts/angular-route.min.js"></script>
    <script type="text/javascript" src="../Scripts/bootstrap.min.js"></script>

    <!-- Add your custom JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <script type="text/javascript" src="../Scripts/Utilities/Constants.js"></script>
    <script type="text/javascript" src="../Scripts/Services/SharePointBASEService.js"></script>
    <script type="text/javascript" src="../Scripts/Services/SharePointCRUDService.js"></script>
    <script type="text/javascript" src="../Scripts/Controllers/USERController.js"></script>
    <script type="text/javascript" src="../Scripts/Controllers/READController.js"></script>
    <script type="text/javascript" src="../Scripts/Controllers/ADDController.js"></script>
    <script type="text/javascript" src="../Scripts/Controllers/EDITController.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    SharePoint AngularJS CRUD Operations
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div data-ng-app="myApp">
        <p data-ng-controller="USERController">Hello {{currentUser | uppercase}}</p>
        <div data-ng-view></div>
    </div>
</asp:Content>
