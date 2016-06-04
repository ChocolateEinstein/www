var UP8 = UP8 || {};

(function() {
	var enumerables = true,
	enumerablesTest = { toString: 1 },
	i;

	for (i in enumerablesTest) {
		enumerables = null;
	}

	if (enumerables) {
		enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable',
			'toLocaleString', 'toString', 'constructor'];
	}


	/**
	* Copies all the properties of config to the specified object.
	* Note that if recursive merging and cloning without referencing the original objects / arrays is needed, use
	* {@link Ext.Object#merge} instead.
	* @param {Object} object The receiver of the properties
	* @param {Object} config The source of the properties
	* @param {Object} [defaults] A different object that will also be applied for default values
	* @return {Object} returns obj
	*/
	UP8.apply = function(object, config, defaults) {
		if (defaults) {
			UP8.apply(object, defaults);
		}

		if (object && config && typeof config === 'object') {
			var i, j, k;

			for (i in config) {
				object[i] = config[i];
			}

			if (enumerables) {
				for (j = enumerables.length; j--;) {
					k = enumerables[j];
					if (config.hasOwnProperty(k)) {
						object[k] = config[k];
					}
				}
			}
		}

		return object;
	};

}());

UP8.lang = {

	CertificateID: 'Certificate ID:',
	CertValidated: 'Validated on:',
	CertIssued: 'Certificate Issued:',

	TitleCertValFailed: 'Validation Failed',
	MsgCertValFailed: 'The Certificate ID could not be found in the database',

	Firstname: 'Firstname',
	Lastname: 'Lastname',
	Company: 'Company / School',
	City: 'City',
	Email: 'Email',
	Address1: 'Address (line 1)',
	Address2: 'Address (line 2)',
	PostalCode: 'Postal code',

	Password: 'Password',
	VerifyPassword: 'Enter again',
	OK: 'OK',
	Cancel: 'Cancel',

	Menu001: 'Login',
	Menu002: 'Download TesterPRO Client',
	Menu003: 'Sales University Registration',
	Menu004: 'Certified Users',
	Menu005: 'Certified Resellers and<br>Training Centers',
	Menu006: 'Validate Certificate',
	Menu007: 'Recover VirtualTester Password',
	Menu008: 'Support and Contact',
	Menu009: 'Administrator Login',
	Menu010: 'Create VirtualTester Account',

	Label001: 'Select a country...',
	Label002: 'Select a certification...',
	Label003: 'Country',
	Label004: 'Certificate',
	Label005: 'Total of <b>{0}</b> certified <b>{1}</b> users world-wide',
	Label006: 'Found <b>{0}</b> users in selected country, <b>{1}</b> users visible in the directory',
	Label007: 'US State',
	Label008: 'Select a state...',
	Label009: 'Recover',
	Label010: 'Enter the number from the picture shown',
	Label011: 'User Details',
	Label012: 'The password entered is not correct',
	Label013: 'Continue Registration',
	Label014: 'Enter CertificateID to validate',
	Label015: 'The digits from the picture were not correct',
	Label016: 'Enter you registered email address to get a new password sent',
	Label017: 'CertificateID',
	Label018: 'Too many failures. Please retry this function',
	Label019: 'CertificateID is not found in the database',
	Label020: 'No account with that email registered in the system',
	Label021: 'An email containing the instructions for resetting your password has been sent to the address entered.<br><br>You will need to complete the instructions in that email within 48 hours to reset your password.',
	Label022: 'A mail containing the password request could not be sent. Please try again later. An error message has been generated and sent to the system maintainers.',
	Label023: 'Found <b>{0}</b> users in selected state, <b>{1}</b> users visible in the directory',
	Label024: 'Enter a new password for your VirtualTester account, at least 8 characters long:',
	Label025: 'The password reset request you are using has expired.<br>You will need to create a new password request and try again.',
	Label026: 'Passwords do not match',
	Label027: 'Your password has been reset',
	Label028: 'Complete the form to create a VirtualTester account. Your password will be sent to the email specified.',
	Label029: 'Validating Account Information',
	Label030: 'Email address already registered',
	Label031: 'A VirtualTester account has been created and the password was sent to the email specified.',
	Label032: 'An error occurred when creating the VirtualTester account. Please try again or contact VirtualTester support.',

	SWSU_SIGNUP_TITLE: 'Certified SolidWorks Sales Professional sign-up',
	SWSU_SIGNUP: 'To be able to signup you need a VAR Resource Center (VRC) account and to have been in contact with your local SolidWorks TSM.',

	SWSU_MATCH_NAME: 'Your email could not be found in the FTE Database.<br>' + 'Enter your first and lastname below to try to locate your account.<br>' + 'If your need assistance contact your local SolidWorks TSM.',
	SWSU_PASSWORD: 'Please enter your VirtualTester account password',
	SWSU_ACCOUNT_CREATED: 'Your acount was created successfully. You should receive an email with login information shortly.',
	SWSU_ACCOUNT_UPDATED: 'Your account information in VirtualTester has been updated successfully.',

	SWSU_ERROR: {
		CONTACT_TSM: 'There was a problem processing your registration.<br>Please contact your local SolidWorks TSM.<br><br>Error was:',
		USER_INACTIVE: 'User inactive in FTE',
		VAR_NOT_FOUND: 'VAR not found in VirtualTester',
		VAR_MAP_ERROR: 'VAR not mapped correctly in VirtualTester',
		NAME_NOT_FOUND: 'Name not found i FTE',
		MULTIPLE_FOUND_ERROR: 'Multiple matches found',
		DISABLED_ERROR: 'User account has been disabled',
		PASSWORD_ERROR: 'Password is not correct',
		LINK_ERROR: 'Account not linked to correct VAR',
		TOO_MANY_TRIES: 'Too many failed password attempts'
	},

	GeneralSystemName: 'SolidWorks® Certification Center',
	LocaleDateFormat: 'm/d/Y',
	LocaleTimeFormat: 'g:i A',
	ExamPassed: 'PASSED',
	ExamFailed: 'FAILED',
	LabelClose: 'Close',
	LabelNo: 'No',
	LabelYes: 'Yes',
	LANG_en: 'English',
	LANG_se: 'svenska',
	LANG_de: 'German',
	LANG_pl: 'Polish',
	LANG_pt: 'Portuguese',
	LANG_fr: 'French',
	LANG_ja: 'Japanese',
	LANG_es: 'Spanish',
	LANG_ko: 'Korean',
	LANG_it: 'Italian',
	LANG_tr: 'Turkish',

	certTabLabel: 'CERTIFICATES',
	examTabLabel: 'EXAM RESULTS',
	creditTabLabel: 'CREDITS / VOUCHERS',
	prefsTabLabel: 'Settings',
	logoutButton: 'Logout',
	teamTabLabel: 'TEAM INFO',
	refreshButton: 'Refresh',
	LOGIN_WelcomeTitle: 'Enter email and password to login and access your certificates and exam results.',
	LOGIN_Password: 'Password',
	LOGIN_LostPassword: 'Lost Password?',
	LOGIN_Language: 'Language',
	LOGIN_Top: 'Welcome to SolidWorks Certification Center',
	LOGIN_Button: 'Login',
	LOGIN_Failure: 'Could not verify the combination of email and password. Please try again or use the function to retrieve a lost password.',
	LOGIN_FailureTitle: 'Authentication Failure',
	LOGIN_ProgressLabel: 'LOADING INFORMATION... %3%%',
	LOGIN_Empty: 'Both email and password must be entered.',
	LOGIN_Remember: 'Remember Login',
	certPageHeader: 'Your Certificates',
	examPageHeader: 'Your Exams',
	creditPageHeader: 'Your Credits',
	prefsPageHeader: 'Your Preferences',
	EL_PageHeader: 'Your Exam Results',
	EL_HeaderSubject: 'Exam Subject',
	EL_HeaderScore: 'Score',
	EL_HeaderResult: 'Result',
	EL_HeaderStarted: 'Exam Started',
	EL_HeaderEnded: 'Exam Ended',
	EL_HeaderDuration: 'Duration',
	EL_YaxisTitle: 'Question Topic',
	EL_XaxisTitle: 'Correct Answers (%)',
	EL_TopicDescription: 'Topic Descriptions',
	EL_PointsToPass: 'Points to Pass',
	CL_HeaderCertificateID: 'Certificate ID',
	CL_HeaderCertificate: 'Certificate',
	CL_HeaderIssuedBy: 'Issued By',
	CL_HeaderIssuedOn: 'Issued On',
	CL_DownloadCertificate: 'Download Certificate',
	CL_DownloadAttachment: 'Download Attachment',
	CL_ButtonWidth: '175',
	CL_VisibleTo: 'Your certificates are now visible to {0} ({1})',
	CL_LabelHide: 'Unpublish Certificates',
	CL_LabelShow: 'Publish Certificates',
	CL_UnshareMessage: 'You are about to remove visibility of your certificates to {0}. Continue?',
	CL_InvalidShare: 'You cannot share your certificates with yourself.',
	CL_CertWarning: 'Warning from Certificate Issuer',
	CL_CertExpired: 'Certificate Expired by Issuer',
	EIW_Title: 'Exam Information',
	CRL_HeaderBalance: 'Balance',
	CRL_HeaderDescription: 'Description',
	CRL_HeaderLatestTrans: 'Latest Transaction',
	CRL_RedeemLabel: 'To redeem a VT-Voucher enter the code here:',
	CRL_RedeemButton: 'Redeem',
	CRL_CreateVouchers: 'Create VT-Vouchers',
	CRL_ShowTransactions: 'Show Transactions',
	CRL_VouchersActive: 'Active Vouchers',
	CRL_VouchersRedeemed: 'Redeemed Vouchers',
	CRL_VoucherCode: 'Code',
	CRL_VoucherAmount: 'Amount',
	CRL_VoucherDescription: 'Description',
	CRL_VoucherCreatedOn: 'Created On',
	CRL_VoucherRedeemedOn: 'Redeemed On',
	CRL_VoucherRedeemedBy: 'Redeemed By',
	CRL_VoucherError: 'VT-Voucher code invalid',
	CRL_VoucherRedeemed: 'VT-Voucher redeemed successfully',
	CRL_VoucherLengthError: 'VT-Voucher code must be 10 characters long',
	CRL_VoucherRequired: 'VT-Voucher code must be entered',
	CRL_VoucherTrackingTag: 'Tracking Tag',
	CRL_TrackingVoucher: 'The voucher code entered is a Trackable Voucher that can only be redeemed by the person issuing the voucher.',
	CRL_CopyVoucherCode: 'Copy Voucher Code',
	CRL_CopyVoucherCodes: 'Copy Voucher Codes',
	CRL_VoucherExpiresOn: 'Expires On',
	CRL_NotConvertToVouchers: 'This type of credit cannot be converted to vouchers',
	CRL_NoCreditsAvailable: 'You do not have any credits available',
	CRL_NotEmployeeError: 'There is a problem redeeming this voucher (you are not registered as an employee in the system). Please contact the person issuing the voucher.',
	CRL_NotUserError: 'There is a problem redeeming this voucher (you are not registered as a user in the system). Please contact the person issuing the voucher.',
	CRL_AlreadyRedeemed: 'You have already redeemed this voucher and it cannot not be used again.',
	CRL_VoucherExpired: 'This voucher has either expired or is not valid yet. Please contact the person issuing the voucher.',
	SF_Company: 'Company',
	SF_Firstname: 'Firstname',
	SF_Lastname: 'Lastname',
	SF_Email: 'Email',
	SF_CurrentPassword: 'Current Password',
	SL_NewPassword: 'New Password',
	SL_PasswordConfirm: 'confirm:',
	SL_ListInDirectory: 'List in Online Directory',
	SL_OptInEmail: 'Opt-in Emails',
	SL_PasswordLength: '(At least 8 charcters long)',
	SF_Address1: 'Address 1',
	SF_Address2: 'Address 2',
	SF_City: 'City',
	SF_State: 'State',
	SF_Country: 'Country',
	SF_Zip: 'Zip/Postal Code',
	SF_SaveButton: 'Update Information',
	SF_WrongPassword: 'Your current password is not entered correctly',
	SF_PasswordDoNotMatch: 'The new password must be entered correctly in both fields.',
	SF_EmailAlreadyRegistered: 'This email is already registered and you cannot change your email to this address.',
	SF_Updated: 'Settings updated',
	CTW_Title: 'Transaction History',
	CTW_HeaderAmount: 'Amount',
	CTW_HeaderDescription: 'Action',
	CTW_HeaderTransDate: 'Date and time',
	CVW_Title: 'Create VT-Vouchers',
	CVW_SelectedCredit: 'Selected Credit',
	CVW_CurrentBalance: 'Your Current Balance',
	CVW_VoucherCount: 'VT-Vouchers to create',
	CVW_VoucherAmount: 'Credits on each VT-Voucher',
	CVW_LabelWidth: '100',
	CVW_Trackable: 'Trackable VT-Vouchers',
	CVW_TrackingTag: 'Tracking Tag',
	CVW_ExpireOn: 'VT-Vouchers expire on',
	CVW_TrackableExplain: 'Trackable VT-Vouchers make the users\' results show on the TEAM INFO tab in your VirtualTester account',
	MCV_ShareCertLabel: 'Enter the email address of another VirtualTester account you want to publish your certificates to.',
	MCV_ShareCertificates: 'Publish my Certificates',
	MCV_ShareOK: 'Your certificates are now visible to {0}.',
	MCV_ShareFailed: 'Could not find a user with the email address {0}. Please check your entry and try again.',
	TC_PageHeader: 'Your Team\'s Information',
	TC_MemberName: 'Team Member',
	TC_TeamCertificatesExplain: 'Listing all team members and their certificates.',
	TC_TeamCertificates: 'Shared Certificates',
	TC_MemberExam: 'Member Exam',
	TC_TrackingTags: 'Tracking Tag:',
	TC_TrackedResults: 'Tracking Vouchers',
	TC_MemberCertificatesExplain: 'Listing all certificates for this team member',
	TC_ShowAll: '*** All Tags ***',
	TC_VoucherStatus: 'Issued {0} vouchers of which {1} have been redeemed',
	TC_FullName: 'Fullname',
	TC_Email: 'Email',
	TC_ExportTag: 'Export Results',
	TC_DeleteTag: 'Delete this Tag',
	TC_ExportTagTooltip: 'No exam results to export',
	TC_DeleteTagTitle: 'Delete Tag',
	TC_DeleteTagQuestion: 'Are you sure you want to delete the tag {0} and redeem all vouchers?',
	TC_DeleteTagProgress: 'Server is processing request...',
	TC_ExportTeam: 'Export Team Info',
	DP_Title: 'Downloading...',
	DP_Progress: 'Downloading... %3%% done',
	DP_Waiting: 'Server is preparing download...',
	VAL_requiredFieldError: 'This field is required.',
	EV_invalidCharError: 'The e-mail address contains invalid characters.',
	EV_invalidDomainError: 'The domain in the e-mail address is incorrectly formatted. ',
	EV_invalidIPDomainError: 'The IP domain in the e-mail address is incorrectly formatted. ',
	EV_invalidPeriodsInDomainError: 'The domain in the e-mail address has consecutive periods. ',
	EV_missingAtSignError: 'An at sign (@) is missing in the e-mail address.',
	EV_missingPeriodInDomainError: 'The domain in the e-mail address is missing a period. ',
	EV_missingUsernameError: 'The username in the e-mail address is missing. ',
	EV_tooManyAtSignsError: 'The e-mail address contains too many @ characters.',
	SV_tooShortError: 'This string is shorter than the minimum allowed length. This must be at least {0} characters long.',
	ALERT_YESLabel: 'Yes',
	ALERT_NOLabel: 'No',
	EVL_PageHeader: 'Training Registration',
	EVL_Description: 'Description',
	EVL_Location: 'Location',
	EVL_Address: 'Address',
	EVL_Trainer: 'Teacher',
	EVL_EventDates: 'Training Dates',
	EVL_EventTime: 'Time',
	EVL_Period: 'Starts on {0}, duration {1} {2}',
	EVL_SignupLabel: 'Register for Training',
	EVL_CancelLabel: 'Cancel Registration',
	EVL_RegisterBy: 'Register By',
	EVL_CreditRequired: 'Credit Required',
	EVL_Cancellation: 'Cancellation',
	EVL_CancelPossible: 'Possible, no later than {0}',
	EVL_CancelNotPossible: 'Not possible after registration',
	EVL_Registration: 'Registration',
	EVL_RegistrationPossible: 'OPEN - until {0}',
	EVL_RegistrationPossibleOnline: 'OPEN',
	EVL_RegistrationSeatsLeft: 'OPEN - until {0}',
	EVL_RegistrationClosed: 'CLOSED on {0}',
	EVL_RegistrationNoSeats: 'CLOSED - no seats left',
	EVL_RegistrationNoCredit: 'Not possible - no credit available',
	EVL_AlreadyRegistered: 'You registered on {0}',
	EVL_Seat: 'seat',
	EVL_Seats: 'seats',
	EVL_day: 'day',
	EVL_days: 'days',
	EVL_ErrorRSVPEnd: 'No longer possible to register for this training',
	EVL_ErrorNoSeats: 'No seats available for this training',
	EVL_ErrorAlreadyReg: 'Already registered for this training',
	EVL_RegistrationSuccess: 'You have been successfully registered for this training',
	EVL_RegistrationComment: 'Registration Comment',
	EVL_EventBetween: 'Starts {0}, duration {1} {2}',
	EVL_CancelSuccess: 'Your registration was successfully removed from this training',
	EVL_ClassroomTraining: 'Classroom Training',
	EVL_OnlineTraining: 'Online eLearning',
	EVL_Registered: 'Registered',
	EVL_NoRegistration: 'Registration not possible',
	EVL_RegistrationAdmin: 'Training Admin',
	EVL_PortalURL: 'eLearning URL',
	EVL_AttachmentSize: '(size: {0})',
	EVLD_TrainingInformation: 'Training Details',
	EVLD_ClassInformation: 'Class Information',
	EVLD_ClassTitle: 'Class Title',
	EVLD_Description: 'Description',
	EVLD_Category: 'Category',
	EVLD_Language: 'Language',
	EVLD_Date: 'Date',
	EVLD_Time: 'Time(s)',
	EVLD_Location: 'Location',
	EVLD_URL: 'eLearning URL',
	EVLD_LocationAddress: 'Location Address',
	EVLD_ClassType: 'Class Type',
	EVLD_PreReq: 'Pre-Requisites',
	EVLD_MaxSize: 'Max Attendees',
	EVLD_MaxSizeInfo: '{0} ({1} left)',
	EVLD_RegFee: 'Registration Fee',
	EVLD_ClassManager: 'Class Manager',
	EVLD_Instructor: 'Instructor',
	EVLD_HotelInformation: 'Hotel Information',
	EVLD_HotelName: 'Hotel Name',
	EVLD_HotelAddress: 'Hotel Address',
	EVLD_MiscInfo: 'Miscellaneous Information',
	EVLD_Attire: 'Attire',
	EVLD_Meals: 'Meals',
	EVLD_CancellationInfo: 'Cancellation Info',
	EVLD_Attachment: 'Attachment',
	EVLD_Registration: 'Registration',
	EVLD_AlreadyRegistered: 'You have already registered',
	EVLD_OnlineSignup: 'You were successfully registered for the eLearning. Check your email for login information. Do you want to open the eLearning web-site?',
	TSW_TitleSignup: 'Register for Training',
	TSW_TitleCancel: 'Cancel My Registration',
	TSW_ConfirmSignup: 'Register',
	TSW_CancelEvent: 'Cancel My Registration',
	TSW_Cancel: 'Cancel',
	TSW_Abort: 'Abort',
	TSW_ExplainClassroom: 'You are about to register for <b>{0}</b> classroom training at <b>{1}</b> starting on <b>{2}</b>.',
	TSW_ExplainCancelClassroom: 'You are about to cancel your registration for <b>{0}</b> classroom training at <b>{1}</b> starting on <b>{2}</b>.',
	TSW_ExplainOnline: 'You are about to register for <b>{0}</b> online eLearning.',
	TSW_Comment: 'If you want to leave a comment to the trainer about your registration (for example ADA or dietary requirements), please do this in the field below:',
	TSW_Language: 'Select the language of the eLearning you prefer:',
	TSW_ExplainConfirmSignup: 'Confirm that you would like to register for this training by clicking \'{0}\'.',
	TSW_ExplainConfirmCancel: 'Confirm that you would like to cancel your registration for this training by clicking \'{0}\'.',
	TSW_LangSelect: 'eLearning Language',

	// New strings as of 7.0.0
	MYACCOUNT: 'My Account',
	GRID_GROUP_ITEM: 'Item',
	GRID_GROUP_ITEMS: 'Items',
	AUTH_PromptMessage: 'To protect your account information, your password is required to continue:',
	AUTH_Blocked: 'Authentication has been blocked due to too many attempts.<br><b>Please try again in 5 minutes.</b>',
	PROMPT_Authenticate: 'To protect your account information, your password is required to continue:',
	REDEEM_Blocked: 'You have tried too many voucher codes.<br><b>Please wait 5 minutes and try again.</b>',
	TC_RemoveFromTeam: 'Remove from Team',
	TC_RemoveTeamMemberConfirm: 'You are about to remove {0} from your team.<br>Do you want to continue?',
	TC_SelectTag: 'Select a tag',
	CI_TabLabel: 'COMPANY INFO',
	CI_PageHeader: 'Company Information',
	CI_EmplTab: 'Locations / Employees',
	CI_CertTab: 'Certificates',
	CI_AwardTab: 'Awards',
	CI_LastActive: 'Last Active',
	CI_EmployeesGridTitle: 'Employees',
	CI_LocationsGridTable: 'Locations',
	CI_Certificates: 'Certificates',
	CI_Phone: 'Phone',
	CI_LatestExamSubject: 'Latest Exam (Subject)',
	CI_LatestExamResult: 'Result (Points to pass)',
	CI_LatestExamDate: 'Date of Latest Exam',
	CI_FilterCerts: 'Show Status',
	CI_CurrentCerts: 'Valid',
	CI_WarningCerts: 'Valid with Warning',
	CI_ExpiredCerts: 'Expired',
	CI_ClearGrouping: 'Clear Grouping',
	CI_GroupBy: 'Group By',
	CI_CollapseAll: 'Collapse All',
	CI_ExpandAll: 'Expand All',
	CI_CertStatus: 'Status',
	CI_AwardTitle: 'Award',
	CI_AwardDescription: 'Description',
	CI_ActivitiesTab: 'Activities',
	CI_FilterActHeading: 'Filter Activities',
	CI_FilterActDate: 'Show activities between dates',
	CI_ActivityType: 'Activity',
	CI_ActivityResult: 'Result',
	CI_ActivityExam: 'Exam',
	CI_ActivityCert: 'Cert Issued',
	CI_AwardReqs: 'Requirements',
	eventTabLabel: 'TRAINING',
	CL_ValidCertificates: 'Valid Certificates',
	CL_ExpiredCertificates: 'Expired Certificates',
	LOGOUT_FORGET: 'Logout and forget',
	LOGOUT_FORGET_TIP: 'Logout and forget your account information on this computer',
	LOGOUT_TIP: 'Clears your password from this computer but remembers your account information for quick access',

	// New as of 7.0.7
	EL_ScoreCard: 'Download Exam Score Card',
	EL_ScoreCardDisabled: 'Exam Score Card not available for this exam'

	// New as of 7.0.10
	,CI_SurveyTab: 'Survey Results'
	,CI_SurveyActHeading: 'Show survey results between'
	,CI_SurveySubject: 'Survey'
	,CI_SurveySubjectEmpty: 'Select a survey...'
	,CI_NoSurveyResults: 'No Survey Results have been registered'

	// New as of 7.1
	,LOGIN_BANNED: 'The account has been disabled and you cannot login.'

	// New as of 7.3.3
	,CL_StatusHeader: 'Status'
	,CL_StatusHeader_Tooltip: 'Certificate Status'
	,CL_DownloadHeader: 'Dwnld'
	,CL_DownloadHeader_Tooltip: 'Certificate Download'
	,CL_AttachmentHeader: 'Attach'
	,CL_AttachmentHeader_Tooltip: 'Attachment Download'
	,CL_QRCode_Info: 'You can use this QR Code to provide a quick reference to a web-page where information about the Certificate is displayed.<br>For example, you could put this QR Code on your CV or business card.'
	,CL_QRCode_Download: 'Download PNG Picture'
	,CL_MyCurriculum: 'My Curriculum'
	,CL_UserQRCode_Info: 'This QR Code contains a link to your complete certification curriculum and could for example be put on your CV or business card.'
	,CL_QRCode_Trademark: 'The term "QR Code" is a registered trademark of DENSO WAVE Incorporated'

	// New as of 8.0
	,CRL_RedeemConfirm: 'Do you really want to redeem voucher {0}?'
	,ACT_CertIssued: '{0} ({1}) issued'
	,ACT_ExamResultShowResult: 'score: {0}, pass: {1} - <b>{2}</b>'
	,ACT_Classroom: 'Registered for {0} training, starting {1}'
	,ACT_ClassroomResult: 'Location {0}, length {1} days'
	,ACT_VirtualClassroomResult: 'Online, {0} virtual meetings'
	,ACT_GroupTraining: 'Training'

	,IN_ProfileConnected: 'Your LinkedIn® profile is connected to your account and your public profile will be shown in the Online Directory.'
	,IN_ProfileNotConnected: 'You can connect your LinkedIn® profile to your account for display in the Online Directory.'
	,IN_ProfileDisconnect: 'Remove LinkedIn® connection'
	,IN_ProfileConnect: 'Connect your LinkedIn® profile'
	,IN_Profile: "User's LinkedIn® profile"
	,IN_Authenticating: 'Authenticating with LinkedIn®...'
	,AUTH_RememberAWeek: 'Remember me for a week (use only on trusted computers)'
	,Label_ExcelExport: 'Export as Excel-file'
	,CL_HideRenewed: 'Hide renewed'

	,EXAM_ScoreDistTitle: 'Score Distribution'
	,EXAM_ScoreDistYAxis: '% of User'
	,EXAM_ScoreDistXAxis: 'Exam Result Score'
	,EXAM_ScoreInfo: 'Average result score: <b>{0}</b>'
	,EXAM_ScoreTips: '{0}% of all users scored {1}'

	// New strings for 8.0.0
	,GEN_Showing: 'Showing {count}'
	,GEN_Comments: 'Comments'

	// New strings for LinkedIn
	,IN_AgreeTitle: 'Confirm'
	,IN_AgreeMsg: 'With your approval, {0} will perform a one-time capture of your <b>public LinkedIn&reg; profile URL</b> and store this for public display in the Certified User Directory.<br><br>You may remove your public profile URL information at any time from your Settings page.<br><br><i>Do you approve retrieval and storing the link to your public LinkedIn&reg; profile for display in the Certified Users Directory?</i>'

	,CL_Total_Cert_Score: 'Total Certification Score: {0}'
	,CL_Cert_Score_Info: 'Certification Score Info'
	,EVLD_Store: 'URL to reseller'

	// New strings company info and Adobe eLearning
	,CI_OverviewTab: 'Overview'
	,CI_CertCatChart: 'Show Graph'
	,EVL_OpenElearning: 'Open eLearning'
	,EVL_OpenElearningWait: 'Opening your eLearning curriculum, please wait...'
	,EVL_UserIsAdmin: 'Your account in Adobe eLearning belongs to the Administrators group and cannot be automatically logged in.'
	,EVLD_OnlineSignup_v2: 'You were successfully registered for the eLearning.'
	,EVL_UserMigrationRequired: 'To enable direct login from {0}, your eLearning account needs to be adjusted.<br><br>After this adjustment has been made you should always login from this page.<br><br>Do you want to continue?'
	,EVL_ElearningAPIError: 'An error occurred while communicating with the eLearning system. The eLearning cannot be opened automatically. Please contact support@virtualtester.com for assistance and include the error: {0}'

	// 2014-10-20
	,EVL_MultipleLanguages: 'You have registered for this eLearning in multiple languages. Please select the language you would like to open:'
	,'LANG_zh-Hans': 'Chinese (simplified)'
	,LabelLocked: 'Supervised'
	,CRL_LockedVoucher: 'This is a Supervised Trackable Voucher and cannot be redeemed. Supervised Trackable Vouchers can only be used at Supervised Events.'
	,EVL_PopupWindowFailed: 'Failed to open the window for the eLearning. Your browser may have a popup-blocker enabled.<br><br>You could try opening the eLearning by clicking this link:<br><a href="{0}" target="_blank">{0}</a>'

	// 2015-03-21
	,IN_Authenticating_2: 'Authenticate with LinkedIn® in the separate window and then click OK.'
	,'LANG_zh-Hant': 'Chinese (traditional)'

	// 2015-05-25
	,CI_UserTag: 'User Tags'
	,CI_EmplUnlinkTooltip: 'Remove User from Organization'
	,CI_EmplEditTooltip: 'Edit User information'
	,CI_EmplCommentTooltip: 'Send message to Account Manager'
	,CI_EmplUnlinkMessage: 'Do you really want to remove <b>{0}</b> from your organization?'
	,CI_EmplLocationPrompt: 'Select office Location for <b>{0}</b>:'
	,CI_EmplSelectLocation: 'Select a location'
	,CI_MessageEmpl: 'Add/change Employee'
	,CI_MessageLocation: 'Add/change Location'
	,CI_MessageOther: 'Other issue'
	,CI_MessageTitle: 'Send a message to your <b>{0}</b> Acount Manager. Select a topic for your message'
	,CI_UserNotes: 'Notes'
	,CI_MessageText: 'Enter message'
	,CI_MessageSuccess: 'Message has been sent successfully.'
	,CI_MessageMask: 'Sending message...'
	,SF_UnlinkFromCompany: 'Remove link to my Company'
	,SF_UnlinkConfirm: 'You should only remove your link to a company when you no longer work for that company.<br>Are you sure you want to remove your link to <b>{0}</b>?'
	,SF_UnlinkDone: 'Your account has been unlinked from the company. This page will now reload.'

	// 2015-06-06
	,CRL_TrackingVoucher2: 'The voucher code entered is a Trackable Voucher that can only be used in Tangix TesterPRO Client to start an exam.'
	,CI_NextLabel: 'Next'
	,CI_EnterEmailText: 'To add users to your company, enter up to 25 email addresses separated by a new line. After validation, invitation emails will be sent to all users.<br>Enter email addresses and click \'Next\' to validate.'
	,CI_InviteTitle: 'Send invitation email'
	,CI_TooManyEmails: 'You have entered too many email addresses. No more than 25 addresses can be entered.'
	,CI_InviteStatusNew: 'New user'
	,CI_InviteStatusExists: 'Can be linked to your company'
	,CI_InviteStatusOtherCompany: 'Linked to another company'
	,CI_InviteStatusAlreadyLinked: 'Already in your company'
	,CI_InviteStatusAlreadyInvited: 'Already invited'
	,CI_SendInvites: 'Send invites'
	,CI_ZeroInvites: 'None of the users entered are possible to invite.<br>Please see the list of email addresses for the reason.'
	,CI_HeaderInvite: 'Invite'
	,CI_HeaderStatus: 'Status'
	,CI_Processing: 'Processing. Please wait...'
	,CI_InviteSuccess: '{0} invites were sent to the selected users. You will be notified by email when the users have processed the invitation.'
	,CI_InviteStatusInvalidEmail: 'Invalid address'

	// 2016-03-09
	,EVLD_CertRegMessage: 'Registration is not possible because:'

	// 2016-04-04
	,CI_CompCertsTab: 'Company Certificates'
	,CL_HeaderExpiresOn: 'Valid until'
	,ACT_Elearning: 'Registered for {0} eLearning'

};
