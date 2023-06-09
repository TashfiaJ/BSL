import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { InvalidCredentialsComponent } from './login/invalid-credentials/invalid-credentials.component';
import { LoginComponent } from './login/login.component';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"invalid-credentials", component:InvalidCredentialsComponent},
  {path:"profile", component:ProfileComponent},
  {path: "otp-verification", component: OtpVerificationComponent},
  {path: "forgot-password", component: ForgotPasswordComponent},
  {path: "teacher-dashboard", component: TeacherDashboardComponent},
  {path: "quiz", component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
