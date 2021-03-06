import { HttpDataProvider } from "./persistence/httpDataProvider";
import * as Constants from "./constants";
import { UnsavedChangesRouteGuard } from "./routing/unsavedChangesRouteGuard";
import { DefaultAuthenticator } from "./components/defaultAuthenticator";
import { IInjector, IInjectorModule } from "@paperbits/common/injection";
import { ConsoleLogger } from "@paperbits/common/logging";
import { ListOfApisModule } from "./components/apis/list-of-apis/ko/listOfApis.module";
import { ListOfApisEditorModule } from "./components/apis/list-of-apis/ko/listOfApisEditor.module";
import { DetailsOfApiModule } from "./components/apis/details-of-api/ko/detailsOfApi.module";
import { DetailsOfApiEditorModule } from "./components/apis/details-of-api/ko/detailsOfApiEditor.module";
import { HistoryOfApiModule } from "./components/apis/history-of-api/ko/historyOfApi.module";
import { HistoryOfApiEditorModule } from "./components/apis/history-of-api/ko/historyOfApiEditor.module";
import { SigninModule } from "./components/users/signin/signin.module";
import { SigninDesignModule } from "./components/users/signin/signin.design.module";
import { SigninSocialModule } from "./components/users/signin-social/signinSocial.module";
import { SignupSocialModule } from "./components/users/signup-social/signupSocial.module";
import { SigninSocialEditorModule } from "./components/users/signin-social/signinSocial.design.module";
import { SignupSocialDesignModule } from "./components/users/signup-social/signupSocial.design.module";
import { SignupModule } from "./components/users/signup/signup.module";
import { SignupDesignModule } from "./components/users/signup/signup.design.module";
import { MapiClient, IdentityService } from "./services";
import { OperationListModule } from "./components/operations/operation-list/ko/operationList.module";
import { OperationListEditorModule } from "./components/operations/operation-list/ko/operationListEditor.module";
import { OperationDetailsDesignModule } from "./components/operations/operation-details/operationDetails.design.module";
import { App } from "./components/app/app";
import { ResetPasswordModule } from "./components/users/reset-password/resetPassword.module";
import { ResetPasswordDesignModule } from "./components/users/reset-password/resetPassword.design.module";
import { ConfirmPasswordModule } from "./components/users/confirm-password/ko/confirmPassword.module";
import { ConfirmPasswordEditorModule } from "./components/users/confirm-password/ko/confirmPasswordEditor.module";
import { ChangePasswordModule } from "./components/users/change-password/ko/changePassword.module";
import { ChangePasswordEditorModule } from "./components/users/change-password/ko/changePasswordEditor.module";
import { TenantService } from "./services/tenantService";
import { ValidationSummaryModule } from "./components/users/validation-summary/validationSummary.module";
import { ValidationSummaryDesignModule } from "./components/users/validation-summary/validationSummary.design.module";
import { BackendService } from "./services/backendService";
import { StaticRoleService } from "./services/roleService";
import { OAuthService } from "./services/oauthService";
import { HistoryRouteHandler } from "@paperbits/common/routing";
import { OldContentRouteGuard } from "./routing/oldContentRouteGuard";
import { RemoteObjectStorage } from "./persistence/remoteObjectStorage";
import { RelativePathRouter } from "./routing/relativePathRouter";
import { RemoteBlobStorage } from "./persistence/remoteBlobStorage";


export class ApimDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bindModule(new ListOfApisModule());
        injector.bindModule(new ListOfApisEditorModule());
        injector.bindModule(new DetailsOfApiModule());
        injector.bindModule(new DetailsOfApiEditorModule());
        injector.bindModule(new HistoryOfApiModule());
        injector.bindModule(new HistoryOfApiEditorModule());
        injector.bindModule(new SigninModule());
        injector.bindModule(new SigninDesignModule());
        injector.bindModule(new SigninSocialModule());
        injector.bindModule(new SignupSocialModule());
        injector.bindModule(new SigninSocialEditorModule());
        injector.bindModule(new SignupSocialDesignModule());
        injector.bindModule(new SignupModule());
        injector.bindModule(new SignupDesignModule());
        injector.bindModule(new OperationListModule());
        injector.bindModule(new OperationListEditorModule());
        injector.bindModule(new OperationDetailsDesignModule());
        injector.bindModule(new ResetPasswordModule());
        injector.bindModule(new ResetPasswordDesignModule());
        injector.bindModule(new ConfirmPasswordModule());
        injector.bindModule(new ConfirmPasswordEditorModule());
        injector.bindModule(new ChangePasswordModule());
        injector.bindModule(new ChangePasswordEditorModule());
        injector.bindModule(new ValidationSummaryDesignModule());
        injector.bindModule(new ValidationSummaryModule());
        injector.bindModule(new SigninSocialEditorModule());
        injector.bindSingleton("app", App);
        injector.bindSingleton("logger", ConsoleLogger);
        injector.bindSingleton("tenantService", TenantService);
        injector.bindSingleton("backendService", BackendService);
        injector.bindSingleton("roleService", StaticRoleService);
        injector.bindSingleton("identityService", IdentityService);
        injector.bindSingleton("mapiClient", MapiClient);
        injector.bindSingleton("authenticator", DefaultAuthenticator);
        injector.bindSingleton("dataProvider", HttpDataProvider);
        injector.bindSingleton("objectStorage", RemoteObjectStorage);
        injector.bindSingleton("blobStorage", RemoteBlobStorage);
        injector.bindToCollection("routeGuards", OldContentRouteGuard);
        injector.bindToCollection("routeGuards", UnsavedChangesRouteGuard);
        injector.bindInstance("reservedPermalinks", Constants.reservedPermalinks);
        injector.bindSingleton("oauthService", OAuthService);

        injector.bindSingleton("router", RelativePathRouter);
        injector.bindToCollection("autostart", HistoryRouteHandler);
    }
}