const dummyData = [
  {
    Id: 1,
    UserID: "1",
    logtype: "INFO",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersVendor_Controller.py   -->   MSCreateVendor   -->   512",
    LogMessage: "Successfully Created ModelTable Invoice.",
    CreatedDateTime: "2024-05-09 18:32:34",
  },
  {
    Id: 2,
    UserID: "2",
    logtype: "DEBUG",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersVendor_Controller.py   -->   GetInvoicesSummary   -->   282",
    LogMessage:
      "Process of Fetching Invoices Summary for ModelTable Resume Started.",
    CreatedDateTime: "2024-06-12 14:47:15",
  },
  {
    Id: 3,
    UserID: "1",
    logtype: "INFO",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersVendor_Controller.py   -->   GetInvoicesSummary   -->   303",
    LogMessage: "Successfully Fetched Invoices Summary for ModelTable Resume.",
    CreatedDateTime: "2024-06-12 14:47:15",
  },
  {
    Id: 4,
    UserID: "2",
    logtype: "INFO",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersVendor_Controller.py   -->   MSGetAllVendors   -->   474",
    LogMessage: "Process of Fetching all Models Started.",
    CreatedDateTime: "2024-06-12 14:44:08",
  },
  {
    Id: 5,
    UserID: "2",
    logtype: "DEBUG",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersVendor_Controller.py   -->   MSCreateVendor   -->   512",
    LogMessage: "Successfully Created ModelTable Invoice.",
    CreatedDateTime: "2024-05-09 18:32:34",
  },
  {
    Id: 6,
    UserID: "1",
    logtype: "INFO",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersVendor_Controller.py   -->   MSCreateVendor   -->   512",
    LogMessage: "Document Fetched Successfully.",
    CreatedDateTime: "2024-06-28 20:34:51",
  },
  {
    Id: 7,
    UserID: "3",
    logtype: "INFO",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersVendor_Controller.py   -->   MSCreateVendor   -->   512",
    LogMessage: "Successfully Created ModelTable Invoice.",
    CreatedDateTime: "2024-05-09 18:32:34",
  },
  {
    Id: 8,
    UserID: "3",
    logtype: "ERROR",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersauth_controller.py   -->   MSGetUserMetaData   -->   577",
    LogMessage: "Fetching user data, metadata, and models started.",
    CreatedDateTime: "2024-06-28 20:37:49",
  },
  {
    Id: 9,
    UserID: "2",
    logtype: "WARN",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersGPTResponse_controller.py   -->   performDocumentExtractionFromDocumentID   -->   237",
    LogMessage:
      "Traceback: Traceback (most recent call last): raise HTTPException(fastapi.exceptions.HTTPException: 409: Server is under heavy load. Please try again later.",
    CreatedDateTime: "2024-06-28 20:37:49",
  },
  {
    Id: 10,
    UserID: "1",
    logtype: "ERROR",
    CallerFunction:
      "D:CustomerAgileVelocitysrcControllersGPTResponse_controller.py   -->   performGPTExtractionProcess   -->   301",
    LogMessage: "Failed to Process the PDF",
    CreatedDateTime: "2024-06-28 20:37:49",
  },
  ...Array.from({ length: 90 }, (v, k) => {
    const id = k + 11;
    const userId = ((k % 3) + 1).toString();
    const logTypes = ["INFO", "DEBUG", "ERROR", "WARN"];
    const logType = logTypes[k % logTypes.length];
    const createdDate = new Date(2024, k % 12, (k % 30) + 1, 12, k % 60, k % 60)
      .toISOString()
      .replace("T", " ")
      .slice(0, 19);

    return {
      Id: id,
      UserID: userId,
      logtype: logType,
      CallerFunction: `D:CustomerAgileVelocitysrcControllersVendor_Controller.py --> Function${
        k % 10
      } --> ${k + 300}`,
      LogMessage: `Log message ${k + 1}.`,
      CreatedDateTime: createdDate,
    };
  }),
];
export default dummyData;
