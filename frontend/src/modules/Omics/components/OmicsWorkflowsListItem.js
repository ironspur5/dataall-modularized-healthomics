// TODO: completely
import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Link,
  Tooltip,
  Typography
} from '@mui/material';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { FiCodesandbox } from 'react-icons/fi';
import React from 'react';

import {
  IconAvatar,
  StackStatus,
  Label,
  useCardStyle
} from 'design';


export const OmicsWorkflowsListItem = (props) => {
  const { workflow } = props;
  const classes = useCardStyle();
  const navigate = useNavigate();
  return (
    <Grid item key={workflow.workflowUri} md={3} xs={12} {...props}>
      <Card key={workflow.workflowUri} className={classes.card} raised>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <IconAvatar icon={<FiCodesandbox size={18} />} />
            <Box sx={{ ml: 2 }}>
              <Link
                underline="hover"
                component="button"
                color="textPrimary"
                variant="h6"
                onClick={() => {
                  navigate(`/console/omics/${workflow.workflowUri}`);
                }}
                sx={{
                  width: '99%',
                  whiteSpace: 'nowrap',
                  alignItems: 'left',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2
                }}
              >
                <Tooltip title={workflow.label}>
                  <span>{workflow.label}</span>
                </Tooltip>
              </Link>
              <Typography color="textSecondary" variant="body2">
                by{' '}
                <Link underline="hover" color="textPrimary" variant="subtitle2">
                  {workflow.owner}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            pb: 2,
            px: 3
          }}
        >
          <Typography
            color="textSecondary"
            variant="body2"
            sx={{
              width: '200px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2
            }}
          >
            <Tooltip title={workflow.description || 'No description provided'}>
              <span>{workflow.description || 'No description provided'}</span>
            </Tooltip>
          </Typography>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 0.5
          }}
        >
          <Grid container>
            <Grid item md={4} xs={12}>
              <Typography color="textSecondary" variant="body2">
                <FaIcons.FaUserShield /> Role
              </Typography>
            </Grid>
            <Grid item md={8} xs={12}>
              <Label
                color={
                  workflow.userRoleForWorkflow === 'Creator'
                    ? 'primary'
                    : 'info'
                }
              >
                {workflow.userRoleForWorkflow || '-'}
              </Label>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 0.5
          }}
        >
          <Grid container>
            <Grid item md={4} xs={12}>
              <Typography color="textSecondary" variant="body2">
                <FaIcons.FaUsersCog /> Team
              </Typography>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography
                color="textPrimary"
                variant="body2"
                sx={{
                  width: '200px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2
                }}
              >
                <Tooltip title={workflow.environment?.SamlGroupName || '-'}>
                  <span>{workflow.environment?.SamlGroupName || '-'}</span>
                </Tooltip>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 0.5
          }}
        >
          <Grid container>
            <Grid item md={4} xs={12}>
              <Typography color="textSecondary" variant="body2">
                <FaIcons.FaAws /> Account
              </Typography>
            </Grid>
            <Grid item md={8} xs={6}>
              <Typography color="textPrimary" variant="body2">
                {workflow.environment.AwsAccountId}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 0.5
          }}
        >
          <Grid container>
            <Grid item md={4} xs={12}>
              <Typography color="textSecondary" variant="body2">
                <FaIcons.FaGlobe /> Region
              </Typography>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography color="textPrimary" variant="body2">
                {workflow.environment.region}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 0.5
          }}
        >
          <Grid container>
            <Grid item md={4} xs={12}>
              <Typography color="textSecondary" variant="body2">
                <FiIcons.FiActivity /> Status
              </Typography>
            </Grid>
            <Grid item md={8} xs={12}>
              <Typography color="textPrimary" variant="body2">
                <StackStatus status={workflow.stack?.status} />
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 1
          }}
        >
          <Grid
            alignItems="center"
            container
            key={workflow.workflowUri}
            justifyContent="space-between"
            spacing={3}
          />
        </Box>
        <Divider />
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pl: 1,
            pr: 3,
            py: 0.5
          }}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Button
              color="primary"
              component={RouterLink}
              to={`/console/omics/${workflow.workflowUri}`}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};
OmicsWorkflowsListItem.propTypes = {
  workflow: PropTypes.object.isRequired
};
