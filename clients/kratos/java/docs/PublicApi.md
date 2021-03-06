# PublicApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeSelfServiceBrowserRecoveryLinkStrategyFlow**](PublicApi.md#completeSelfServiceBrowserRecoveryLinkStrategyFlow) | **POST** /self-service/browser/flows/recovery/link | Complete the browser-based recovery flow using a recovery link
[**completeSelfServiceBrowserSettingsOIDCSettingsFlow**](PublicApi.md#completeSelfServiceBrowserSettingsOIDCSettingsFlow) | **POST** /self-service/browser/flows/registration/strategies/oidc/settings/connections | Complete the browser-based settings flow for the OpenID Connect strategy
[**completeSelfServiceBrowserSettingsPasswordStrategyFlow**](PublicApi.md#completeSelfServiceBrowserSettingsPasswordStrategyFlow) | **POST** /self-service/browser/flows/settings/strategies/password | Complete the browser-based settings flow for the password strategy
[**completeSelfServiceBrowserSettingsProfileStrategyFlow**](PublicApi.md#completeSelfServiceBrowserSettingsProfileStrategyFlow) | **POST** /self-service/browser/flows/settings/strategies/profile | Complete the browser-based settings flow for profile data
[**completeSelfServiceBrowserVerificationFlow**](PublicApi.md#completeSelfServiceBrowserVerificationFlow) | **POST** /self-service/browser/flows/verification/{via}/complete | Complete the browser-based verification flows
[**getSchema**](PublicApi.md#getSchema) | **GET** /schemas/{id} | 
[**getSelfServiceBrowserLoginRequest**](PublicApi.md#getSelfServiceBrowserLoginRequest) | **GET** /self-service/browser/flows/requests/login | Get the request context of browser-based login user flows
[**getSelfServiceBrowserRecoveryRequest**](PublicApi.md#getSelfServiceBrowserRecoveryRequest) | **GET** /self-service/browser/flows/requests/recovery | Get the request context of browser-based recovery flows
[**getSelfServiceBrowserRegistrationRequest**](PublicApi.md#getSelfServiceBrowserRegistrationRequest) | **GET** /self-service/browser/flows/requests/registration | Get the request context of browser-based registration user flows
[**getSelfServiceBrowserSettingsRequest**](PublicApi.md#getSelfServiceBrowserSettingsRequest) | **GET** /self-service/browser/flows/requests/settings | Get the request context of browser-based settings flows
[**getSelfServiceError**](PublicApi.md#getSelfServiceError) | **GET** /self-service/errors | Get user-facing self-service errors
[**getSelfServiceVerificationRequest**](PublicApi.md#getSelfServiceVerificationRequest) | **GET** /self-service/browser/flows/requests/verification | Get the request context of browser-based verification flows
[**initializeSelfServiceBrowserLoginFlow**](PublicApi.md#initializeSelfServiceBrowserLoginFlow) | **GET** /self-service/browser/flows/login | Initialize browser-based login user flow
[**initializeSelfServiceBrowserLogoutFlow**](PublicApi.md#initializeSelfServiceBrowserLogoutFlow) | **GET** /self-service/browser/flows/logout | Initialize Browser-Based Logout User Flow
[**initializeSelfServiceBrowserRegistrationFlow**](PublicApi.md#initializeSelfServiceBrowserRegistrationFlow) | **GET** /self-service/browser/flows/registration | Initialize browser-based registration user flow
[**initializeSelfServiceBrowserVerificationFlow**](PublicApi.md#initializeSelfServiceBrowserVerificationFlow) | **GET** /self-service/browser/flows/verification/init/{via} | Initialize browser-based verification flow
[**initializeSelfServiceRecoveryFlow**](PublicApi.md#initializeSelfServiceRecoveryFlow) | **GET** /self-service/browser/flows/recovery | Initialize browser-based account recovery flow
[**initializeSelfServiceSettingsFlow**](PublicApi.md#initializeSelfServiceSettingsFlow) | **GET** /self-service/browser/flows/settings | Initialize browser-based settings flow
[**selfServiceBrowserVerify**](PublicApi.md#selfServiceBrowserVerify) | **GET** /self-service/browser/flows/verification/{via}/confirm/{code} | Complete the browser-based verification flows
[**whoami**](PublicApi.md#whoami) | **GET** /sessions/whoami | Check who the current HTTP session belongs to


<a name="completeSelfServiceBrowserRecoveryLinkStrategyFlow"></a>
# **completeSelfServiceBrowserRecoveryLinkStrategyFlow**
> completeSelfServiceBrowserRecoveryLinkStrategyFlow()

Complete the browser-based recovery flow using a recovery link

&gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...) and HTML Forms.  More information can be found at [ORY Kratos Account Recovery Documentation](../self-service/flows/password-reset-account-recovery).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    try {
      apiInstance.completeSelfServiceBrowserRecoveryLinkStrategyFlow();
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#completeSelfServiceBrowserRecoveryLinkStrategyFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="completeSelfServiceBrowserSettingsOIDCSettingsFlow"></a>
# **completeSelfServiceBrowserSettingsOIDCSettingsFlow**
> completeSelfServiceBrowserSettingsOIDCSettingsFlow()

Complete the browser-based settings flow for the OpenID Connect strategy

This endpoint completes a browser-based settings flow. This is usually achieved by POSTing data to this endpoint.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...) and HTML Forms.  More information can be found at [ORY Kratos User Settings &amp; Profile Management Documentation](../self-service/flows/user-settings).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    try {
      apiInstance.completeSelfServiceBrowserSettingsOIDCSettingsFlow();
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#completeSelfServiceBrowserSettingsOIDCSettingsFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="completeSelfServiceBrowserSettingsPasswordStrategyFlow"></a>
# **completeSelfServiceBrowserSettingsPasswordStrategyFlow**
> completeSelfServiceBrowserSettingsPasswordStrategyFlow()

Complete the browser-based settings flow for the password strategy

This endpoint completes a browser-based settings flow. This is usually achieved by POSTing data to this endpoint.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...) and HTML Forms.  More information can be found at [ORY Kratos User Settings &amp; Profile Management Documentation](../self-service/flows/user-settings).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    try {
      apiInstance.completeSelfServiceBrowserSettingsPasswordStrategyFlow();
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#completeSelfServiceBrowserSettingsPasswordStrategyFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="completeSelfServiceBrowserSettingsProfileStrategyFlow"></a>
# **completeSelfServiceBrowserSettingsProfileStrategyFlow**
> completeSelfServiceBrowserSettingsProfileStrategyFlow(request, body)

Complete the browser-based settings flow for profile data

This endpoint completes a browser-based settings flow. This is usually achieved by POSTing data to this endpoint.  If the provided profile data is valid against the Identity&#39;s Traits JSON Schema, the data will be updated and the browser redirected to &#x60;url.settings_ui&#x60; for further steps.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...) and HTML Forms.  More information can be found at [ORY Kratos User Settings &amp; Profile Management Documentation](../self-service/flows/user-settings).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String request = "request_example"; // String | Request is the request ID.
    CompleteSelfServiceBrowserSettingsStrategyProfileFlowPayload body = new CompleteSelfServiceBrowserSettingsStrategyProfileFlowPayload(); // CompleteSelfServiceBrowserSettingsStrategyProfileFlowPayload | 
    try {
      apiInstance.completeSelfServiceBrowserSettingsProfileStrategyFlow(request, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#completeSelfServiceBrowserSettingsProfileStrategyFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **String**| Request is the request ID. |
 **body** | [**CompleteSelfServiceBrowserSettingsStrategyProfileFlowPayload**](CompleteSelfServiceBrowserSettingsStrategyProfileFlowPayload.md)|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="completeSelfServiceBrowserVerificationFlow"></a>
# **completeSelfServiceBrowserVerificationFlow**
> completeSelfServiceBrowserVerificationFlow(request, via)

Complete the browser-based verification flows

This endpoint completes a browser-based verification flow. This is usually achieved by POSTing data to this endpoint.  If the provided data is valid against the Identity&#39;s Traits JSON Schema, the data will be updated and the browser redirected to &#x60;url.settings_ui&#x60; for further steps.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...) and HTML Forms.  More information can be found at [ORY Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/selfservice/flows/verify-email-account-activation).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String request = "request_example"; // String | Request is the Request ID  The value for this parameter comes from `request` URL Query parameter sent to your application (e.g. `/verify?request=abcde`).
    String via = "via_example"; // String | What to verify  Currently only \"email\" is supported.
    try {
      apiInstance.completeSelfServiceBrowserVerificationFlow(request, via);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#completeSelfServiceBrowserVerificationFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **String**| Request is the Request ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/verify?request&#x3D;abcde&#x60;). |
 **via** | **String**| What to verify  Currently only \&quot;email\&quot; is supported. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="getSchema"></a>
# **getSchema**
> Object getSchema(id)



Get a traits schema definition

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String id = "id_example"; // String | ID must be set to the ID of schema you want to get
    try {
      Object result = apiInstance.getSchema(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#getSchema");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID must be set to the ID of schema you want to get |

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The raw identity traits schema |  -  |
**404** | genericError |  -  |
**500** | genericError |  -  |

<a name="getSelfServiceBrowserLoginRequest"></a>
# **getSelfServiceBrowserLoginRequest**
> LoginRequest getSelfServiceBrowserLoginRequest(request)

Get the request context of browser-based login user flows

This endpoint returns a login request&#39;s context with, for example, error details and other information.  When accessing this endpoint through ORY Kratos&#39; Public API, ensure that cookies are set as they are required for CSRF to work. To prevent token scanning attacks, the public endpoint does not return 404 status codes.  More information can be found at [ORY Kratos User Login and User Registration Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-login-user-registration).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String request = "request_example"; // String | Request is the Login Request ID  The value for this parameter comes from `request` URL Query parameter sent to your application (e.g. `/login?request=abcde`).
    try {
      LoginRequest result = apiInstance.getSelfServiceBrowserLoginRequest(request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#getSelfServiceBrowserLoginRequest");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **String**| Request is the Login Request ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/login?request&#x3D;abcde&#x60;). |

### Return type

[**LoginRequest**](LoginRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | loginRequest |  -  |
**403** | genericError |  -  |
**404** | genericError |  -  |
**410** | genericError |  -  |
**500** | genericError |  -  |

<a name="getSelfServiceBrowserRecoveryRequest"></a>
# **getSelfServiceBrowserRecoveryRequest**
> RecoveryRequest getSelfServiceBrowserRecoveryRequest(request)

Get the request context of browser-based recovery flows

When accessing this endpoint through ORY Kratos&#39; Public API, ensure that cookies are set as they are required for checking the auth session. To prevent scanning attacks, the public endpoint does not return 404 status codes but instead 403 or 500.  More information can be found at [ORY Kratos Account Recovery Documentation](../self-service/flows/password-reset-account-recovery).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String request = "request_example"; // String | Request is the Login Request ID  The value for this parameter comes from `request` URL Query parameter sent to your application (e.g. `/recover?request=abcde`).
    try {
      RecoveryRequest result = apiInstance.getSelfServiceBrowserRecoveryRequest(request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#getSelfServiceBrowserRecoveryRequest");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **String**| Request is the Login Request ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/recover?request&#x3D;abcde&#x60;). |

### Return type

[**RecoveryRequest**](RecoveryRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | recoveryRequest |  -  |
**403** | genericError |  -  |
**404** | genericError |  -  |
**410** | genericError |  -  |
**500** | genericError |  -  |

<a name="getSelfServiceBrowserRegistrationRequest"></a>
# **getSelfServiceBrowserRegistrationRequest**
> RegistrationRequest getSelfServiceBrowserRegistrationRequest(request)

Get the request context of browser-based registration user flows

This endpoint returns a registration request&#39;s context with, for example, error details and other information.  When accessing this endpoint through ORY Kratos&#39; Public API, ensure that cookies are set as they are required for CSRF to work. To prevent token scanning attacks, the public endpoint does not return 404 status codes.  More information can be found at [ORY Kratos User Login and User Registration Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-login-user-registration).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String request = "request_example"; // String | Request is the Registration Request ID  The value for this parameter comes from `request` URL Query parameter sent to your application (e.g. `/registration?request=abcde`).
    try {
      RegistrationRequest result = apiInstance.getSelfServiceBrowserRegistrationRequest(request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#getSelfServiceBrowserRegistrationRequest");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **String**| Request is the Registration Request ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/registration?request&#x3D;abcde&#x60;). |

### Return type

[**RegistrationRequest**](RegistrationRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | registrationRequest |  -  |
**403** | genericError |  -  |
**404** | genericError |  -  |
**410** | genericError |  -  |
**500** | genericError |  -  |

<a name="getSelfServiceBrowserSettingsRequest"></a>
# **getSelfServiceBrowserSettingsRequest**
> SettingsRequest getSelfServiceBrowserSettingsRequest(request)

Get the request context of browser-based settings flows

When accessing this endpoint through ORY Kratos&#39; Public API, ensure that cookies are set as they are required for checking the auth session. To prevent scanning attacks, the public endpoint does not return 404 status codes but instead 403 or 500.  More information can be found at [ORY Kratos User Settings &amp; Profile Management Documentation](../self-service/flows/user-settings).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String request = "request_example"; // String | Request is the Login Request ID  The value for this parameter comes from `request` URL Query parameter sent to your application (e.g. `/settingss?request=abcde`).
    try {
      SettingsRequest result = apiInstance.getSelfServiceBrowserSettingsRequest(request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#getSelfServiceBrowserSettingsRequest");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **String**| Request is the Login Request ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/settingss?request&#x3D;abcde&#x60;). |

### Return type

[**SettingsRequest**](SettingsRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | settingsRequest |  -  |
**403** | genericError |  -  |
**404** | genericError |  -  |
**410** | genericError |  -  |
**500** | genericError |  -  |

<a name="getSelfServiceError"></a>
# **getSelfServiceError**
> ErrorContainer getSelfServiceError(error)

Get user-facing self-service errors

This endpoint returns the error associated with a user-facing self service errors.  When accessing this endpoint through ORY Kratos&#39; Public API, ensure that cookies are set as they are required for CSRF to work. To prevent token scanning attacks, the public endpoint does not return 404 status codes.  More information can be found at [ORY Kratos User User Facing Error Documentation](https://www.ory.sh/docs/kratos/self-service/flows/user-facing-errors).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String error = "error_example"; // String | 
    try {
      ErrorContainer result = apiInstance.getSelfServiceError(error);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#getSelfServiceError");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error** | **String**|  | [optional]

### Return type

[**ErrorContainer**](ErrorContainer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User-facing error response |  -  |
**403** | genericError |  -  |
**404** | genericError |  -  |
**500** | genericError |  -  |

<a name="getSelfServiceVerificationRequest"></a>
# **getSelfServiceVerificationRequest**
> VerificationRequest getSelfServiceVerificationRequest(request)

Get the request context of browser-based verification flows

When accessing this endpoint through ORY Kratos&#39; Public API, ensure that cookies are set as they are required for checking the auth session. To prevent scanning attacks, the public endpoint does not return 404 status codes but instead 403 or 500.  More information can be found at [ORY Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/selfservice/flows/verify-email-account-activation).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String request = "request_example"; // String | Request is the Request ID  The value for this parameter comes from `request` URL Query parameter sent to your application (e.g. `/verify?request=abcde`).
    try {
      VerificationRequest result = apiInstance.getSelfServiceVerificationRequest(request);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#getSelfServiceVerificationRequest");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | **String**| Request is the Request ID  The value for this parameter comes from &#x60;request&#x60; URL Query parameter sent to your application (e.g. &#x60;/verify?request&#x3D;abcde&#x60;). |

### Return type

[**VerificationRequest**](VerificationRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | verificationRequest |  -  |
**403** | genericError |  -  |
**404** | genericError |  -  |
**500** | genericError |  -  |

<a name="initializeSelfServiceBrowserLoginFlow"></a>
# **initializeSelfServiceBrowserLoginFlow**
> initializeSelfServiceBrowserLoginFlow(refresh)

Initialize browser-based login user flow

This endpoint initializes a browser-based user login flow. Once initialized, the browser will be redirected to &#x60;selfservice.flows.login.ui_url&#x60; with the request ID set as a query parameter. If a valid user session exists already, the browser will be redirected to &#x60;urls.default_redirect_url&#x60;.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [ORY Kratos User Login and User Registration Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-login-user-registration).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    Boolean refresh = true; // Boolean | Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session.
    try {
      apiInstance.initializeSelfServiceBrowserLoginFlow(refresh);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#initializeSelfServiceBrowserLoginFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refresh** | **Boolean**| Refresh a login session  If set to true, this will refresh an existing login session by asking the user to sign in again. This will reset the authenticated_at time of the session. | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="initializeSelfServiceBrowserLogoutFlow"></a>
# **initializeSelfServiceBrowserLogoutFlow**
> initializeSelfServiceBrowserLogoutFlow()

Initialize Browser-Based Logout User Flow

This endpoint initializes a logout flow.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  On successful logout, the browser will be redirected (HTTP 302 Found) to &#x60;urls.default_return_to&#x60;.  More information can be found at [ORY Kratos User Logout Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-logout).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    try {
      apiInstance.initializeSelfServiceBrowserLogoutFlow();
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#initializeSelfServiceBrowserLogoutFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="initializeSelfServiceBrowserRegistrationFlow"></a>
# **initializeSelfServiceBrowserRegistrationFlow**
> initializeSelfServiceBrowserRegistrationFlow()

Initialize browser-based registration user flow

This endpoint initializes a browser-based user registration flow. Once initialized, the browser will be redirected to &#x60;selfservice.flows.registration.ui_url&#x60; with the request ID set as a query parameter. If a valid user session exists already, the browser will be redirected to &#x60;urls.default_redirect_url&#x60;.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [ORY Kratos User Login and User Registration Documentation](https://www.ory.sh/docs/next/kratos/self-service/flows/user-login-user-registration).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    try {
      apiInstance.initializeSelfServiceBrowserRegistrationFlow();
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#initializeSelfServiceBrowserRegistrationFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="initializeSelfServiceBrowserVerificationFlow"></a>
# **initializeSelfServiceBrowserVerificationFlow**
> initializeSelfServiceBrowserVerificationFlow(via)

Initialize browser-based verification flow

This endpoint initializes a browser-based verification flow. Once initialized, the browser will be redirected to &#x60;selfservice.flows.settings.ui_url&#x60; with the request ID set as a query parameter. If no valid user session exists, a login flow will be initialized.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [ORY Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/selfservice/flows/verify-email-account-activation).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String via = "via_example"; // String | What to verify  Currently only \"email\" is supported.
    try {
      apiInstance.initializeSelfServiceBrowserVerificationFlow(via);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#initializeSelfServiceBrowserVerificationFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **via** | **String**| What to verify  Currently only \&quot;email\&quot; is supported. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="initializeSelfServiceRecoveryFlow"></a>
# **initializeSelfServiceRecoveryFlow**
> initializeSelfServiceRecoveryFlow()

Initialize browser-based account recovery flow

This endpoint initializes a browser-based account recovery flow. Once initialized, the browser will be redirected to &#x60;selfservice.flows.recovery.ui_url&#x60; with the request ID set as a query parameter. If a valid user session exists, the request is aborted.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [ORY Kratos Account Recovery Documentation](../self-service/flows/password-reset-account-recovery).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    try {
      apiInstance.initializeSelfServiceRecoveryFlow();
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#initializeSelfServiceRecoveryFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="initializeSelfServiceSettingsFlow"></a>
# **initializeSelfServiceSettingsFlow**
> initializeSelfServiceSettingsFlow()

Initialize browser-based settings flow

This endpoint initializes a browser-based settings flow. Once initialized, the browser will be redirected to &#x60;selfservice.flows.settings.ui_url&#x60; with the request ID set as a query parameter. If no valid user session exists, a login flow will be initialized.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...).  More information can be found at [ORY Kratos User Settings &amp; Profile Management Documentation](../self-service/flows/user-settings).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    try {
      apiInstance.initializeSelfServiceSettingsFlow();
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#initializeSelfServiceSettingsFlow");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="selfServiceBrowserVerify"></a>
# **selfServiceBrowserVerify**
> selfServiceBrowserVerify(code, via)

Complete the browser-based verification flows

This endpoint completes a browser-based verification flow.  &gt; This endpoint is NOT INTENDED for API clients and only works with browsers (Chrome, Firefox, ...) and HTML Forms.  More information can be found at [ORY Kratos Email and Phone Verification Documentation](https://www.ory.sh/docs/kratos/selfservice/flows/verify-email-account-activation).

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    String code = "code_example"; // String | 
    String via = "via_example"; // String | What to verify  Currently only \"email\" is supported.
    try {
      apiInstance.selfServiceBrowserVerify(code, via);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#selfServiceBrowserVerify");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  |
 **via** | **String**| What to verify  Currently only \&quot;email\&quot; is supported. |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**302** | Empty responses are sent when, for example, resources are deleted. The HTTP status code for empty responses is typically 201. |  -  |
**500** | genericError |  -  |

<a name="whoami"></a>
# **whoami**
> Session whoami()

Check who the current HTTP session belongs to

Uses the HTTP Headers in the GET request to determine (e.g. by using checking the cookies) who is authenticated. Returns a session object in the body or 401 if the credentials are invalid or no credentials were sent. Additionally when the request it successful it adds the user ID to the &#39;X-Kratos-Authenticated-Identity-Id&#39; header in the response.  This endpoint is useful for reverse proxies and API Gateways.

### Example
```java
// Import classes:
import sh.ory.kratos.ApiClient;
import sh.ory.kratos.ApiException;
import sh.ory.kratos.Configuration;
import sh.ory.kratos.models.*;
import sh.ory.kratos.api.PublicApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost");

    PublicApi apiInstance = new PublicApi(defaultClient);
    try {
      Session result = apiInstance.whoami();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling PublicApi#whoami");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Session**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | session |  -  |
**403** | genericError |  -  |
**500** | genericError |  -  |

