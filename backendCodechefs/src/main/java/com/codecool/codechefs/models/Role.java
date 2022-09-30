package com.codecool.codechefs.models;

import org.springframework.security.core.GrantedAuthority;

public enum Role  {
    ADMIN,
    CHEF,
    CUSTOMER;

    // @Override
    // public String toString() {
    //     var roleName = super.toString();
    //     return String.format("ROLE_%s", roleName);
    // }
}
